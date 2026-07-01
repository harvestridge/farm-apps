// ============================================================
// Clearwater Bin Manager — Load Tickets Add-On
// Paste this into your existing Apps Script alongside
// ClearwaterBinManager_Setup.gs
// ============================================================

// Run once to create the LoadTickets sheet
function setupLoadTicketsSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  let sheet = ss.getSheetByName("LoadTickets");
  if (sheet) ss.deleteSheet(sheet);
  sheet = ss.insertSheet("LoadTickets");

  const headers = [
    "Timestamp", "Ticket #", "Date/Time", "Truck", "Crop", "Field",
    "Net Weight (lbs)", "Bushels", "Moisture %", "Test Weight (lbs)",
    "Temp (°F)", "Destination Bin", "Bin ID", "Notes"
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

  // Formatting
  sheet.getRange(1, 1, 1, headers.length)
    .setBackground("#0C2D6B")
    .setFontColor("#FFFFFF")
    .setFontWeight("bold");

  sheet.setColumnWidth(1, 140);   // Timestamp
  sheet.setColumnWidth(2, 90);    // Ticket #
  sheet.setColumnWidth(3, 140);   // Date/Time
  sheet.setColumnWidth(4, 110);   // Truck
  sheet.setColumnWidth(5, 130);   // Crop
  sheet.setColumnWidth(6, 140);   // Field
  sheet.setColumnWidth(7, 120);   // Net Weight
  sheet.setColumnWidth(8, 90);    // Bushels
  sheet.setColumnWidth(9, 90);    // Moisture
  sheet.setColumnWidth(10, 120);  // Test Weight
  sheet.setColumnWidth(11, 80);   // Temp
  sheet.setColumnWidth(12, 110);  // Dest Bin
  sheet.setColumnWidth(13, 70);   // Bin ID
  sheet.setColumnWidth(14, 200);  // Notes
  sheet.setFrozenRows(1);

  SpreadsheetApp.getUi().alert("LoadTickets sheet created!");
}

// ── UPDATED doPost — handles both load tickets and bin movements ──
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (data.action === 'loadTicket') {
      recordLoadTicket(data);
    } else {
      // Standard bin movement from Bin Manager
      recordMovement(
        data.binId, data.movementType, data.bushels,
        data.commodity, null, '', '', data.notes || ''
      );
    }

    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: err.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function recordLoadTicket(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // 1. Write to LoadTickets sheet
  const ltSheet = ss.getSheetByName("LoadTickets");
  const lastRow = ltSheet.getLastRow() + 1;
  ltSheet.getRange(lastRow, 1, 1, 14).setValues([[
    new Date(),
    data.ticketNum   || "",
    data.dateTime    || "",
    data.truck       || "",
    data.crop        || "",
    data.field       || "",
    data.netWeight   || 0,
    data.bushels     || 0,
    data.moisture    || "",
    data.testWeight  || "",
    data.temp        || "",
    data.binName     || "",
    data.binId       || "",
    data.notes       || ""
  ]]);
  ltSheet.getRange(lastRow, 1).setNumberFormat("M/d/yyyy h:mm");
  ltSheet.getRange(lastRow, 7, 1, 2).setNumberFormat("#,##0");

  // Alternating row color
  if (lastRow % 2 === 0) {
    ltSheet.getRange(lastRow, 1, 1, 14).setBackground("#F0F4FB");
  }

  // 2. Update Bins sheet — add bushels to destination bin
  if (data.binId && data.bushels > 0) {
    recordMovement(
      data.binId,
      "Add",
      data.bushels,
      data.crop,
      null,
      data.field,      // fromTo = field of origin
      "",
      `Load ticket #${data.ticketNum} · ${data.truck} · ${data.field}`
    );
  }
}
