/**
 *Find and rig layers

 */

var mainWindow = new Window("palette", "Remove Effect", undefined); // main frame, column
mainWindow.orientation = "column";

var inputTextGroup = mainWindow.add("group", undefined, "Input Text Group");  // first group, row
inputTextGroup.orientation = "row";
var stattextWidth = inputTextGroup.add("statictext", undefined, "Width:");
var textWidth = inputTextGroup.add("edittext", undefined, "");
textWidth.size = [55, 25];
var stattextHeight = inputTextGroup.add("statictext", undefined, "Height:");
var textHeight = inputTextGroup.add("edittext", undefined, "");
textHeight.size = [55, 25];


var groupThree = mainWindow.add("group", undefined, "Group Three");
groupThree.orientation = "row";
groupThree.alignment = "left";
var framerateText = groupThree.add("statictext", undefined, "Framerate:");
var framerateInput = groupThree.add("edittext", undefined, "");
framerateInput.size = [30, 25];
var durationText = groupThree.add("statictext", undefined, "Duration (s.):");
var durationInput = groupThree.add("edittext", undefined, "");
//var secText = groupThree.add("statictext", undefined, "s.");
durationInput.size = [30, 25];

var buttonGroup = mainWindow.add("group", undefined, "Button Group");
buttonGroup.orientation = "row";
var setButton = buttonGroup.add("button", undefined, "Apply Changes");
setButton.size = [100, 25];

mainWindow.center();
mainWindow.show();

setButton.onClick = function (){

var w=textWidth.text;   // width
var h=textHeight.text;    // height
var myDuration = durationInput.text; //duration
var f_rate = framerateInput.text;  //number of layer to delete


app.beginUndoGroup("Find and ColorControl text");
                       //Work with selected composition only
                        for (var k = 1; k <= app.project.numItems; k++){
                                if ((app.project.item(k).selected) && (app.project.item(k) instanceof CompItem)) {
                               var currComp = app.project.item(k);
                            
                                    if ((w == parseInt (w, 10))){   
                                            currComp.width = parseInt (w, 10);    //change width if comp
                                        }else if (w != ""){
                                            alert ("Please ender valid Width value");
                                            }
                                        
                                    if ((h == parseInt (h, 10))){   
                                            currComp.height = parseInt (h, 10);    //change height if comp
                                        }else if (h != ""){
                                            alert ("Please ender valid Height value");
                                            }
                                        
                                     if ((myDuration == parseInt (myDuration, 10))){   
                                            currComp.duration = parseInt (myDuration, 10); // set duration
                                        }else if (myDuration != ""){
                                            alert ("Please ender valid Duration value");
                                            }
                                        
                                     if ((f_rate == parseInt (f_rate, 10))){   
                                            currComp.frameRate = parseInt (f_rate, 10); // set framerate
                                        }else if (f_rate != ""){
                                            alert ("Please ender valid Framerate value");
                                            }
             
                            //currComp.workAreaDuration = currComp.duration - 0.03;
                                
                            // to remove specific layer
                            //  var myLayers = app.project.item(k).layers;
                            //  myLayers[layerToDelete].remove();
                                                                                               
                                            } 
                                  }
                                    
                                
                        

                    app.endUndoGroup();
              
            //         app.executeCommand(app.findMenuCommandId("Save a Copy As CC (13)..."));


}
