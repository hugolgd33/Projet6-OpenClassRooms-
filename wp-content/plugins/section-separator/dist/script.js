!function(){"use strict";var e=wp.element,t=function(e){var t=e.attributes,n=e.clientId,r=t.position,a=t.height;return wp.element.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t#sepSeparator-".concat(n," .sepSeparator{\n\t\t\theight: ").concat("0px"===a||"0%"===a||"0em"===a?"300px":a,";\n\t\t\ttransform: ").concat("top"===r?"rotate(180deg)":"rotate(0deg)",";\n\t\t}\n\t\t").replace(/\s+/g," ")}})},n=function(t){var n=t.attributes,r=n.segments,a=n.waves,o=(0,e.useRef)(null);return(0,e.useEffect)((function(){!function(e,t,n,r){function a(){for(var t=0;t<r.length;t++){for(var a=r[t],o=a.fillColor,s=a.strokeWidth,i=a.strokeColor,l=new e.Path({fillColor:o,strokeWidth:s,strokeColor:i,closed:!0}),c=0;c<=n+1;c++)l.add(new e.Point(e.view.size.width/n*c,35));l.add([e.view.size.width+5,e.view.size.height+5],[-5,e.view.size.height+5]),r[t].segments=l.segments}}e.setup(t),a(),e.view.onResize=function(){a()},e.view.onFrame=function(e){for(var t=0;t<=r[0].segments.length-3;t++)for(var n=0;n<r.length;n++){var a=r[n],o=a.speed,s=a.shape,i=a.position,l=a.segments[t],c=Math.sin(e.time*o+t/s);l.point.y=34*c+35+i,t>0&&t<r[0].segments.length-3&&l.smooth()}}}(new paper.PaperScope,o.current,r,a)}),[o,r,a]),wp.element.createElement("canvas",{className:"sepSeparator",resize:!0,ref:o})};document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-sep-separator").forEach((function(r){var a=JSON.parse(r.dataset.attributes);(0,e.render)(wp.element.createElement(wp.element.Fragment,null,wp.element.createElement(t,{attributes:a,clientId:a.cId}),wp.element.createElement(n,{attributes:a})),r),null==r||r.removeAttribute("data-attributes")}))}))}();
//# sourceMappingURL=script.js.map