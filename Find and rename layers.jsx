/**
 *Find and rename layers

 */
fun();
function fun(){

var searchWord = "image";
var replaceWord = "mixed-media";
var maxSlides = 30;
var maxElements = 15;


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
