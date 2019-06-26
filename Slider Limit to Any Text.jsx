/**
 *Find and add slider control for text layer

 */
limitText();
function limitText(){

var searchWord = "text"; 
var maxSlides = 20;
var maxElements = 20;
var sliderPos = 90;

app.beginUndoGroup("Limit text with Slide Control");

        
                          //Work with selected composition only
                        for (var k = 1; k <= app.project.numItems; k++){
                                if ((app.project.item(k).selected) && (app.project.item(k) instanceof CompItem)) {
                                    
                                     var myLayers = app.project.item(k).layers;
                                     
                                            for (var i = 1; i <= myLayers.length; i ++) { 
                                                
                                                var layerName = myLayers[i].name;
                                                
                                                    for (var f = 1; f <= maxSlides; f ++) {   // first number in search word
                                                            for (var s = 1; s <= maxElements; s ++) {    // second number in search word
                                                                                                                     
                                                                     if ((app.project.item(k).layer(i).property("sourceText") !== null) ){       
                                                                                
                                                                                var CurrLayer = myLayers[i];  // select curr layer
                                                             
                                                                                 set_scale(k, CurrLayer); // call function to set scale
                                                                                }                              
                                                                      }                                                                        
                                            } 
                                  }
                                    
                                }
                        }

                    app.endUndoGroup();

}

function set_scale(k, CurrLayer){
        if (!CurrLayer.Effects.property("Width Limit")){
        var myEffect = CurrLayer.Effects.addProperty("Slider Control");
        myEffect.name = "Width Limit";
            }
         if (!CurrLayer.Effects.property("Height Limit")){
        var myEffect = CurrLayer.Effects.addProperty("Slider Control");
        myEffect.name = "Height Limit";
            }
        
        text_w =CurrLayer.sourceRectAtTime(2, false).width;   // text width
        text_h =CurrLayer.sourceRectAtTime(2, false).height;   // text height
        comp_w =app.project.item(k).width;   // current comp width
        comp_h =app.project.item(k).height;   // current comp width
              
           var sliderPos = 90;     
        CurrLayer.effect("Width Limit")("Slider").setValue(sliderPos);  //set slider position
        CurrLayer.effect("Height Limit")("Slider").setValue(sliderPos);  //set slider position
                                                                             
        // set expression for Scale
        CurrLayer.transform.scale.expression = "txt = thisComp.layer(index); txt_w = txt.sourceRectAtTime(time,false).width; txt_h = txt.sourceRectAtTime(time,false).height; comp_w=thisComp.width; comp_h=thisComp.height; N_w=thisComp.layer(index).effect('Width Limit')('Slider').value/100; N_h=thisComp.layer(index).effect('Height Limit')('Slider').value/100; max_w=comp_w*N_w; if (txt_w>max_w){x=max_w*100/txt_w;} else {x=100;} max_h=comp_h*N_h; if (txt_h>max_h){y=max_h*100/txt_h;} else {y=100;} [x,y]";
 }
