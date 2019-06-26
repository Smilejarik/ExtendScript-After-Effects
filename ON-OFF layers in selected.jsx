/**
 *Find and rig layers

 */
fun();
function fun(){


app.beginUndoGroup("Find and Rig bg element to bottom");
        
                         //Work with selected composition only
                        for (var k = 1; k <= app.project.numItems; k++){
                                if (app.project.item(k).selected) {
                                     
                        //             app.project.item(k).layer(3).remove();
                              
                                     
                                //   app.project.item(k).layer(1).enabled = false; // first layer
                                   
                                   
                                   //Turn OFF texts
                                   var myLayers = app.project.item(k).layers;
                                   
                                    for (var i = 1; i <= myLayers.length; i ++) {                                        
                                                                                                            
                                                                     if ((app.project.item(k).layer(i).property("sourceText") !== null) && (app.project.item(k).layer(i).shy == false) && (app.project.item(k).layer(i).locked == false))       // Or "Source Text", "text", or "Text"
                                                                     {
                                                                         
                                                                         app.project.item(k).layer(i).enabled = false;
                                                                         
                                                                         }
                                                                     }
                                  
                                }
                        }

                    app.endUndoGroup();

                    

 //app.executeCommand(app.findMenuCommandId("Save a Copy As CC (13)..."));

}
