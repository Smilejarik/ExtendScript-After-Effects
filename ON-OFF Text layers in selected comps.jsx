/**
 *Turn text layers visibility on or off in the selected compositions

 */
turn_layers();
function turn_layers(){


app.beginUndoGroup("Find and on-off text layers");
        
                         //Work with selected compositions only
                        for (var k = 1; k <= app.project.numItems; k++){
                                if (app.project.item(k).selected && (app.project.item(k) instanceof CompItem)) {
                                     
                                   //Turn OFF texts
                                   var myLayers = app.project.item(k).layers; // define all layers
                                   
                                    for (var i = 1; i <= myLayers.length; i ++) {                                        
                                                                                                            
                                                 if ((app.project.item(k).layer(i).property("sourceText") !== null) && (app.project.item(k).layer(i).shy == false) && (app.project.item(k).layer(i).locked == false))       // Or "Source Text", "text", or "Text"
                                                        {     
                                                         app.project.item(k).layer(i).enabled = false;           
                                                         }
                                                   }
                                }
                        }

                    app.endUndoGroup();
}
