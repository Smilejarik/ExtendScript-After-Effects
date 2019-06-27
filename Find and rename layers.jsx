/**
 *Find and rename layers

 */
var mainWindow = new Window("palette", "Rename Layers", undefined); // main frame, column
mainWindow.orientation = "column";

var inputGroup = mainWindow.add("group", undefined, "Input Text Group");  // first group, row
inputGroup.orientation = "column"
var oldName = inputGroup.add("edittext", undefined, "Old Name");
oldName.size = [100, 25];
var newName = inputGroup.add("edittext", undefined, "New Name");
newName.size = [100, 25];
var renameButton = inputGroup.add("button", undefined, "Rename Layers");
renameButton.size = [100, 25];

mainWindow.center();
mainWindow.show();

renameButton.onClick = function (){

var searchWord = oldName.text;
var replaceWord = newName.text;
var maxSlides = 10;  // if you have numbers in name like "Name to Search1.1" so this parameter is first number
var maxElements = 10;   // if you have numbers in name like "Name to Search1.1" so this parameter is second number


app.beginUndoGroup("Find and rename layers");
        
                         //Work with selected composition only
                        for (var k = 1; k <= app.project.numItems; k++){
                                if (app.project.item(k).selected) {
                                    
                                     var myLayers = app.project.item(k).layers;
                                     
                                            for (var i = 1; i <= myLayers.length; i ++) { 
                                                
                                                var layerName = myLayers[i].name;
                                                
                                                    for (var f = 1; f <= maxSlides; f ++) {   // first number in search word
                                                            for (var s = 1; s <= maxElements; s ++) {    // second number in search word
                                                                     if (layerName === (searchWord + f + "." + s)){       
                                                                            var CurrLayer = app.project.item(k).layer(searchWord + f + "." + s);  // select curr layer
                                                                            CurrLayer.name = replaceWord + f + "." + s;                                     // rename curr layer
                                                                                                                          
                                                                      }
                                                            }
                                                    }
                                            } 
                                }
                        }
                    app.endUndoGroup();
}
