/**
 *Find and rig layers

 */
var searchWord = "text";  
var maxSlides = 150;
var maxElements = 30;

app.beginUndoGroup("Remove Templater");

remove_temp();
function remove_temp(){

var xShift = 1;
var yShift = 1;
var colorHere = 0;


        
        
        
                          //Work with selected composition only
                        for (var k = 1; k <= app.project.numItems; k++){
                                if ((app.project.item(k) instanceof CompItem)) {
                                    
                                     var myLayers = app.project.item(k).layers;
                                     
                                            for (var i = 1; i <= myLayers.length; i ++) { 
                                                
                                     /*        var layerName = myLayers[i].name;
                                                
                                                    for (var f = 1; f <= maxSlides; f ++) {   // first number in search word
                                                            for (var s = 1; s <= maxElements; s ++) {    // second number in search word
                                                            
                                                                     
                                                                     if (layerName === (searchWord + f + "." + s)){       
                                                                             */      
                                                                                var CurrLayer = app.project.item(k).layer(i);  // select curr layer
                                                                                                                                               
                                                           // 1. Remove templater          
                                                                           if (CurrLayer.Effects.property("Templater Settings")){
                                                                                    //deleteTemplater Effect of this layer as we will attach to copy
                                                                                          CurrLayer.Effects.property("Templater Settings").remove();
                                                                                      }
                                                                          
                                                                                
                                                                               }
                                                                                    
                                                                          }                              
                                                                  }                                                                        
                
                    
              
            //         app.executeCommand(app.findMenuCommandId("Save a Copy As CC (13)..."));
}
app.endUndoGroup();