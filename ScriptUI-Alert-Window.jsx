// Configure the alert text parameters to pass to the main window function
scriptAlert("Alert Window Title", "Alert text string 1", "Alert text string 2");

// Main function
function scriptAlert(alertTitle, alertString1, alertString2) {

    try {

        // ALERT WINDOW
        var alertWindow = new Window("dialog", undefined, undefined, { resizeable: false });
        alertWindow.text = alertTitle;
        /*
        // DIALOG BACKGROUND COLOR
        var gra = dialog.graphics;
        var uiBrush = gra.newBrush(gra.BrushType.SOLID_COLOR, [0.3, 0.3, 0.3, 1]);
        gra.backgroundColor = uiBrush;
        */
        alertWindow.preferredSize.width = 300;
        alertWindow.preferredSize.height = 100;
        alertWindow.orientation = "column";
        alertWindow.alignChildren = ["center", "top"];
        alertWindow.spacing = 10;
        alertWindow.margins = 20;

        // TEXT GROUP
        var alertText = alertWindow.add("group");
        alertText.orientation = "column";
        alertText.preferredSize.width = 300;
        alertText.alignChildren = ["left", "center"];
        alertText.spacing = 0;
        alertText.alignment = ["left", "top"];

        // TEXT STRINGS
        alertStringSize1 = alertText.add("statictext", undefined, alertString1, { name: "alertText", multiline: true });
        alertStringSize1.graphics.font = ScriptUI.newFont("dialog", "bold", 13);
        /*
        // TEXT COLOR
        alertStringSize1.graphics.foregroundColor = alertStringSize1.graphics.newPen(alertStringSize1.graphics.PenType.SOLID_COLOR, [1, 1, 1], 1);
        */

        alertStringSize2 = alertText.add("statictext", undefined, alertString2, { name: "alertText", multiline: true });
        alertStringSize2.graphics.font = "dialog:13";
        /*
        // TEXT COLOR
        alertStringSize2.graphics.foregroundColor = alertStringSize2.graphics.newPen(alertStringSize2.graphics.PenType.SOLID_COLOR, [1, 1, 1], 1);
        */

        // OK BUTTON
        var okButton = alertWindow.add("button", undefined, undefined, { name: "okButton" });
        okButton.text = "OK";
        okButton.alignment = ["left", "top"];
        okButton.graphics.font = "dialog:13";

        // RENDER THE WINDOW
        alertWindow.show();

    }

    catch (err) {
        alert("If you see this message an unexpected error has occurred!");
    }
}
