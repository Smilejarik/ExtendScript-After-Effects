/**
 *Script removes defined effect from the selected compositions
 */

var mainWindow = new Window("palette", "Remove Effect", undefined); // main frame, column
mainWindow.orientation = "column";

var inputTextGroup = mainWindow.add("group", undefined, "Input Text Group");  // first group, row
inputTextGroup.orientation = "row";
var textInput = inputTextGroup.add("edittext", undefined, "Effect Name");
textInput.size = [100, 25];

var buttonGroup = mainWindow.add("group", undefined, "Button Group");
buttonGroup.orientation = "row";
var removeButton = buttonGroup.add("button", undefined, "Remove Effect");
removeButton.size = [100, 25];

mainWindow.center();
mainWindow.show();

removeButton.onClick = function (){
    
    app.beginUndoGroup("Remove Effect");
                       var effectName = textInput.text;
                       
                       //Work with selected compositions only
                        for (var k = 1; k <= app.project.numItems; k++){
                                if ((app.project.item(k) instanceof CompItem) && app.project.item(k).selected) {
                                    
                                     var myLayers = app.project.item(k).layers;
                                     
                                            for (var i = 1; i <= myLayers.length; i ++) { 
                                   
                                                     var CurrLayer = app.project.item(k).layer(i);  // select curr layer
                                                                                                                                               
                                                           // 1. Remove effect
                                                           if (CurrLayer.Effects.property(effectName)){
                                                               
                                                               CurrLayer.Effects.property(effectName).remove();  // removes selected effect
                                                               
                                                              }                
                                                           }                       
                                                        }                              
                                                     }
            //         app.executeCommand(app.findMenuCommandId("Save a Copy As..."));   // uncomment to save if needed
            app.endUndoGroup();
}
