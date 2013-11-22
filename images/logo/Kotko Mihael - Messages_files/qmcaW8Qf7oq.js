/*1373152828,173214271*/

if (self.CavalryLogger) { CavalryLogger.start_js(["vLkIR"]); }

__d("ContainerDimensionsUtils",["Event","Style","Vector","EagleEye","DOM"],function(a,b,c,d,e,f){var g=b('Event'),h=b('Style'),i=b('Vector'),j=b('EagleEye'),k=b('DOM');f.onDimensionsReady=function(l,m){var n=k.scry(l,'img.img'),o=n.length;if(o){var p=function(){--o;if(!o)m.defer();};n.forEach(function(q){if(q.complete){p();}else g.listen(q,{load:p,error:p,abort:p});});}else m.defer();};f.log=function(l,m,n,o){var p=l.parentNode;if(p)f.onDimensionsReady(p,function(){var q=i.getElementDimensions(p),r=i.getElementPosition(p),s=parseInt(h.get(p,'marginBottom'),10);j.log(m,[o,q.x,q.y+s,r.x,r.y,n]);});};});
__d("legacy:bind",["bind"],function(a,b,c,d){a.bind=b('bind');},3);