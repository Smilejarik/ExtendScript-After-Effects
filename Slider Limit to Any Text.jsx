﻿/**
 *Find apply size limits on text with slider control
 */
var mainWindow = new Window("palette", "Limit Text Size", undefined); // main frame, column
mainWindow.orientation = "column";

var buttonGroup = mainWindow.add("group", undefined, "Button Group");
buttonGroup.orientation = "row"
var limitButton = buttonGroup.add("button", undefined, "Add Text Limit");
limitButton.size = [100, 25];

mainWindow.center();
mainWindow.show();

limitButton.onClick = function (){

var sliderPos = 90;

app.beginUndoGroup("Limit text with Slide Control");

        
                          //Work with selected composition only
                        for (var k = 1; k <= app.project.numItems; k++){
                                if ((app.project.item(k).selected) && (app.project.item(k) instanceof CompItem)) {
                                    
                                     var myLayers = app.project.item(k).layers;
                                     
                                            for (var i = 1; i <= myLayers.length; i ++) { 
                                                
                                                if ((myLayers[i].property("sourceText") !== null) ){       
                                                                                
                                                        var CurrLayer = myLayers[i];  // select curr layer
                                                         set_scale(k, CurrLayer); // call function to set scale
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
        
        var def_w = CurrLayer.scale.valueAtTime(0, false)[0].toString(); // default scale in string
        var def_h = CurrLayer.scale.valueAtTime(0, false)[1].toString(); // default scale in string
        
        text_w =CurrLayer.sourceRectAtTime(2, false).width;   // text width
        text_h =CurrLayer.sourceRectAtTime(2, false).height;   // text height
        comp_w =app.project.item(k).width;   // current comp width
        comp_h =app.project.item(k).height;   // current comp width
              
           var sliderPos = 90;     
        CurrLayer.effect("Width Limit")("Slider").setValue(sliderPos);  //set slider position
        CurrLayer.effect("Height Limit")("Slider").setValue(sliderPos);  //set slider position
                                                                             
        // set expression for Scale
        CurrLayer.transform.scale.expression = "txt = thisLayer;\
\
txt_w = txt.sourceRectAtTime(time,false).width*"+def_w/100+";\
txt_h = txt.sourceRectAtTime(time,false).height*"+def_h/100+";\
\
comp_w=thisComp.width;\
comp_h=thisComp.height;\
\
w_limit=txt.effect('Width Limit')('Slider').value/100;\
h_limit=txt.effect('Height Limit')('Slider').value/100;\
\
max_w=comp_w*w_limit;\
max_h=comp_h*h_limit;\
\
if (txt_w>max_w){x=max_w*"+def_w+"/txt_w;}\
else {x="+def_h+";}\
\
if (txt_h>max_h){y=max_h*"+def_h+"/txt_h;}\
else {y="+def_h+";}\
\
x = Math.min(x,y);\
\
y=x;\
[x,y]";
 }
