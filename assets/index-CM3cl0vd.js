var fm=Object.defineProperty;var dm=(r,e,t)=>e in r?fm(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var lh=(r,e,t)=>dm(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mu="166",Zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pm=0,ch=1,mm=2,jf=1,Jf=2,Ti=3,ir=0,Mn=1,wi=2,Ji=0,Ts=1,uh=2,hh=3,fh=4,_m=5,yr=100,gm=101,vm=102,xm=103,Mm=104,Sm=200,ym=201,Em=202,Tm=203,_c=204,gc=205,bm=206,Am=207,wm=208,Cm=209,Rm=210,Pm=211,Lm=212,Dm=213,Im=214,Um=0,Nm=1,Om=2,Wa=3,Fm=4,Bm=5,zm=6,km=7,Qf=0,Hm=1,Vm=2,Qi=0,Gm=1,Wm=2,ed=3,Xm=4,Ym=5,qm=6,Zm=7,td=300,Us=301,Ns=302,vc=303,xc=304,ul=306,Mc=1e3,br=1001,Sc=1002,qn=1003,Km=1004,Ho=1005,ri=1006,El=1007,Ar=1008,Ii=1009,nd=1010,id=1011,To=1012,Su=1013,Or=1014,Ri=1015,No=1016,yu=1017,Eu=1018,Os=1020,rd=35902,sd=1021,od=1022,si=1023,ad=1024,ld=1025,bs=1026,Fs=1027,cd=1028,Tu=1029,ud=1030,bu=1031,Au=1033,Ca=33776,Ra=33777,Pa=33778,La=33779,yc=35840,Ec=35841,Tc=35842,bc=35843,Ac=36196,wc=37492,Cc=37496,Rc=37808,Pc=37809,Lc=37810,Dc=37811,Ic=37812,Uc=37813,Nc=37814,Oc=37815,Fc=37816,Bc=37817,zc=37818,kc=37819,Hc=37820,Vc=37821,Da=36492,Gc=36494,Wc=36495,hd=36283,Xc=36284,Yc=36285,qc=36286,$m=3200,jm=3201,Jm=0,Qm=1,Yi="",oi="srgb",lr="srgb-linear",wu="display-p3",hl="display-p3-linear",Xa="linear",yt="srgb",Ya="rec709",qa="p3",$r=7680,dh=519,e_=512,t_=513,n_=514,fd=515,i_=516,r_=517,s_=518,o_=519,ph=35044,mh="300 es",Pi=2e3,Za=2001;class Xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _h=1234567;const co=Math.PI/180,bo=180/Math.PI;function Xs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Zt(r,e,t){return Math.max(e,Math.min(t,r))}function Cu(r,e){return(r%e+e)%e}function a_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function l_(r,e,t){return r!==e?(t-r)/(e-r):0}function uo(r,e,t){return(1-t)*r+t*e}function c_(r,e,t,n){return uo(r,e,1-Math.exp(-t*n))}function u_(r,e=1){return e-Math.abs(Cu(r,e*2)-e)}function h_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function f_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function d_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function p_(r,e){return r+Math.random()*(e-r)}function m_(r){return r*(.5-Math.random())}function __(r){r!==void 0&&(_h=r);let e=_h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g_(r){return r*co}function v_(r){return r*bo}function x_(r){return(r&r-1)===0&&r!==0}function M_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function S_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function y_(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),h=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*d,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*d,o*c);break;case"ZXZ":r.set(l*d,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*h,o*c);break;case"YXY":r.set(l*h,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*h,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _s(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function un(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const E_={DEG2RAD:co,RAD2DEG:bo,generateUUID:Xs,clamp:Zt,euclideanModulo:Cu,mapLinear:a_,inverseLerp:l_,lerp:uo,damp:c_,pingpong:u_,smoothstep:h_,smootherstep:f_,randInt:d_,randFloat:p_,randFloatSpread:m_,seededRandom:__,degToRad:g_,radToDeg:v_,isPowerOfTwo:x_,ceilPowerOfTwo:M_,floorPowerOfTwo:S_,setQuaternionFromProperEuler:y_,normalize:un,denormalize:_s};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],_=i[0],p=i[3],m=i[6],E=i[1],M=i[4],T=i[7],C=i[2],w=i[5],A=i[8];return s[0]=a*_+o*E+l*C,s[3]=a*p+o*M+l*w,s[6]=a*m+o*T+l*A,s[1]=c*_+u*E+d*C,s[4]=c*p+u*M+d*w,s[7]=c*m+u*T+d*A,s[2]=f*_+h*E+g*C,s[5]=f*p+h*M+g*w,s[8]=f*m+h*T+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,g=t*d+n*f+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Tl.makeScale(e,t)),this}rotate(e){return this.premultiply(Tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tl=new je;function dd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ka(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function T_(){const r=Ka("canvas");return r.style.display="block",r}const gh={};function pd(r){r in gh||(gh[r]=!0,console.warn(r))}function b_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const vh=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xh=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vo={[lr]:{transfer:Xa,primaries:Ya,toReference:r=>r,fromReference:r=>r},[oi]:{transfer:yt,primaries:Ya,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[hl]:{transfer:Xa,primaries:qa,toReference:r=>r.applyMatrix3(xh),fromReference:r=>r.applyMatrix3(vh)},[wu]:{transfer:yt,primaries:qa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(xh),fromReference:r=>r.applyMatrix3(vh).convertLinearToSRGB()}},A_=new Set([lr,hl]),dt={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!A_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Vo[e].toReference,i=Vo[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Vo[r].primaries},getTransfer:function(r){return r===Yi?Xa:Vo[r].transfer}};function As(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let jr;class w_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jr===void 0&&(jr=Ka("canvas")),jr.width=e.width,jr.height=e.height;const n=jr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ka("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=As(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(As(t[n]/255)*255):t[n]=As(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C_=0;class md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Al(i[a].image)):s.push(Al(i[a]))}else s=Al(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Al(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?w_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R_=0;class Sn extends Xr{constructor(e=Sn.DEFAULT_IMAGE,t=Sn.DEFAULT_MAPPING,n=br,i=br,s=ri,a=Ar,o=si,l=Ii,c=Sn.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Xs(),this.name="",this.source=new md(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==td)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mc:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mc:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=td;Sn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,n=0,i=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,T=(h+1)/2,C=(m+1)/2,w=(u+f)/4,A=(d+_)/4,L=(g+p)/4;return M>T&&M>C?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=A/n):T>C?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=w/i,s=L/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=A/s,i=L/s),this.set(n,i,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P_ extends Xr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new md(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends P_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _d extends Sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class L_ extends Sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qn,this.minFilter=qn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Br{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const f=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==h||u!==g){let p=1-o;const m=l*f+c*h+u*g+d*_,E=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,m*E);p=Math.sin(p*w)/C,o=Math.sin(o*w)/C}const T=o*E;if(l=l*p+f*T,c=c*p+h*T,u=u*p+g*T,d=d*p+_*T,p===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-o*h,e[t+2]=c*g+u*h+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),f=l(n/2),h=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wl=new B,Mh=new Br;class Oo{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Wo.subVectors(this.max,qs),Jr.subVectors(e.a,qs),Qr.subVectors(e.b,qs),es.subVectors(e.c,qs),Bi.subVectors(Qr,Jr),zi.subVectors(es,Qr),ur.subVectors(Jr,es);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-ur.z,ur.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,ur.z,0,-ur.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-ur.y,ur.x,0];return!Cl(t,Jr,Qr,es,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,Jr,Qr,es,Wo))?!1:(Xo.crossVectors(Bi,zi),t=[Xo.x,Xo.y,Xo.z],Cl(t,Jr,Qr,es,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new B,new B,new B,new B,new B,new B,new B,new B],Qn=new B,Go=new Oo,Jr=new B,Qr=new B,es=new B,Bi=new B,zi=new B,ur=new B,qs=new B,Wo=new B,Xo=new B,hr=new B;function Cl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){hr.fromArray(r,s);const o=i.x*Math.abs(hr.x)+i.y*Math.abs(hr.y)+i.z*Math.abs(hr.z),l=e.dot(hr),c=t.dot(hr),u=n.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const D_=new Oo,Zs=new B,Rl=new B;class fl{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):D_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Rl)),this.expandByPoint(Zs.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new B,Pl=new B,Yo=new B,ki=new B,Ll=new B,qo=new B,Dl=new B;class Ru{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Pl.copy(e).add(t).multiplyScalar(.5),Yo.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Pl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Yo),o=ki.dot(this.direction),l=-ki.dot(Yo),c=ki.lengthSq(),u=Math.abs(1-a*a);let d,f,h,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Pl).addScaledVector(Yo,f),h}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,i,s){Ll.subVectors(t,e),qo.subVectors(n,e),Dl.crossVectors(Ll,qo);let a=this.direction.dot(Dl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(qo.crossVectors(ki,qo));if(l<0)return null;const c=o*this.direction.dot(Ll.cross(ki));if(c<0||l+c>a)return null;const u=-o*ki.dot(Dl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,n,i,s,a,o,l,c,u,d,f,h,g,_,p){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,f,h,g,_,p)}set(e,t,n,i,s,a,o,l,c,u,d,f,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f+_*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f-_*o,t[4]=-a*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=a*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I_,e,U_)}lookAt(e,t,n){const i=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Hi.crossVectors(n,Pn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Hi.crossVectors(n,Pn)),Hi.normalize(),Zo.crossVectors(Pn,Hi),i[0]=Hi.x,i[4]=Zo.x,i[8]=Pn.x,i[1]=Hi.y,i[5]=Zo.y,i[9]=Pn.y,i[2]=Hi.z,i[6]=Zo.z,i[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],_=n[6],p=n[10],m=n[14],E=n[3],M=n[7],T=n[11],C=n[15],w=i[0],A=i[4],L=i[8],S=i[12],x=i[1],P=i[5],U=i[9],z=i[13],K=i[2],$=i[6],W=i[10],X=i[14],H=i[3],oe=i[7],D=i[11],ce=i[15];return s[0]=a*w+o*x+l*K+c*H,s[4]=a*A+o*P+l*$+c*oe,s[8]=a*L+o*U+l*W+c*D,s[12]=a*S+o*z+l*X+c*ce,s[1]=u*w+d*x+f*K+h*H,s[5]=u*A+d*P+f*$+h*oe,s[9]=u*L+d*U+f*W+h*D,s[13]=u*S+d*z+f*X+h*ce,s[2]=g*w+_*x+p*K+m*H,s[6]=g*A+_*P+p*$+m*oe,s[10]=g*L+_*U+p*W+m*D,s[14]=g*S+_*z+p*X+m*ce,s[3]=E*w+M*x+T*K+C*H,s[7]=E*A+M*P+T*$+C*oe,s[11]=E*L+M*U+T*W+C*D,s[15]=E*S+M*z+T*X+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*d-i*c*d-s*o*f+n*c*f+i*o*h-n*l*h)+_*(+t*l*h-t*c*f+s*a*f-i*a*h+i*c*u-s*l*u)+p*(+t*c*d-t*o*h-s*a*d+n*a*h+s*o*u-n*c*u)+m*(-i*o*u-t*l*d+t*o*f+i*a*d-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],E=d*p*c-_*f*c+_*l*h-o*p*h-d*l*m+o*f*m,M=g*f*c-u*p*c-g*l*h+a*p*h+u*l*m-a*f*m,T=u*_*c-g*d*c+g*o*h-a*_*h-u*o*m+a*d*m,C=g*d*l-u*_*l-g*o*f+a*_*f+u*o*p-a*d*p,w=t*E+n*M+i*T+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=E*A,e[1]=(_*f*s-d*p*s-_*i*h+n*p*h+d*i*m-n*f*m)*A,e[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*m+n*l*m)*A,e[3]=(d*l*s-o*f*s-d*i*c+n*f*c+o*i*h-n*l*h)*A,e[4]=M*A,e[5]=(u*p*s-g*f*s+g*i*h-t*p*h-u*i*m+t*f*m)*A,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*m-t*l*m)*A,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*h+t*l*h)*A,e[8]=T*A,e[9]=(g*d*s-u*_*s-g*n*h+t*_*h+u*n*m-t*d*m)*A,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*m+t*o*m)*A,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*h-t*o*h)*A,e[12]=C*A,e[13]=(u*_*i-g*d*i+g*n*f-t*_*f-u*n*p+t*d*p)*A,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*p-t*o*p)*A,e[15]=(a*d*i-u*o*i+u*n*l-t*d*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,g=s*d,_=a*u,p=a*d,m=o*d,E=l*c,M=l*u,T=l*d,C=n.x,w=n.y,A=n.z;return i[0]=(1-(_+m))*C,i[1]=(h+T)*C,i[2]=(g-M)*C,i[3]=0,i[4]=(h-T)*w,i[5]=(1-(f+m))*w,i[6]=(p+E)*w,i[7]=0,i[8]=(g+M)*A,i[9]=(p-E)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ts.set(i[0],i[1],i[2]).length();const a=ts.set(i[4],i[5],i[6]).length(),o=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ei.copy(this);const c=1/s,u=1/a,d=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,t.setFromRotationMatrix(ei),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Pi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let h,g;if(o===Pi)h=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Za)h=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Pi){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(a-s),f=(t+e)*c,h=(n+i)*u;let g,_;if(o===Pi)g=(a+s)*d,_=-2*d;else if(o===Za)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ts=new B,ei=new Ut,I_=new B(0,0,0),U_=new B(1,1,1),Hi=new B,Zo=new B,Pn=new B,Sh=new Ut,yh=new Br;class Ui{constructor(e=0,t=0,n=0,i=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class gd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N_=0;const Eh=new B,ns=new Br,Si=new Ut,Ko=new B,Ks=new B,O_=new B,F_=new Br,Th=new B(1,0,0),bh=new B(0,1,0),Ah=new B(0,0,1),wh={type:"added"},B_={type:"removed"},is={type:"childadded",child:null},Il={type:"childremoved",child:null};class yn extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new B,t=new Ui,n=new Br,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ut},normalMatrix:{value:new je}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(bh,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(bh,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ko.copy(e):Ko.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Ks,Ko,this.up):Si.lookAt(Ko,Ks,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),ns.setFromRotationMatrix(Si),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wh),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B_),Il.child=e,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wh),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,O_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,F_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yn.DEFAULT_UP=new B(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new B,yi=new B,Ul=new B,Ei=new B,rs=new B,ss=new B,Ch=new B,Nl=new B,Ol=new B,Fl=new B;class ui{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ti.subVectors(e,t),i.cross(ti);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ti.subVectors(i,t),yi.subVectors(n,t),Ul.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(yi),l=ti.dot(Ul),c=yi.dot(yi),u=yi.dot(Ul),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static isFrontFacing(e,t,n,i){return ti.subVectors(n,t),yi.subVectors(e,t),ti.cross(yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),ti.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ui.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;rs.subVectors(i,n),ss.subVectors(s,n),Nl.subVectors(e,n);const l=rs.dot(Nl),c=ss.dot(Nl);if(l<=0&&c<=0)return t.copy(n);Ol.subVectors(e,i);const u=rs.dot(Ol),d=ss.dot(Ol);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(rs,a);Fl.subVectors(e,s);const h=rs.dot(Fl),g=ss.dot(Fl);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ss,o);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return Ch.subVectors(s,i),o=(d-u)/(d-u+(h-g)),t.copy(i).addScaledVector(Ch,o);const m=1/(p+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(rs,a).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Bl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=Cu(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Bl(a,s,e+1/3),this.g=Bl(a,s,e),this.b=Bl(a,s,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=oi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const n=vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=bl(e.r),this.g=bl(e.g),this.b=bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return dt.fromWorkingColorSpace(nn.copy(this),e),Math.round(Zt(nn.r*255,0,255))*65536+Math.round(Zt(nn.g*255,0,255))*256+Math.round(Zt(nn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(nn.copy(this),t);const n=nn.r,i=nn.g,s=nn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=oi){dt.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,i=nn.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL($o);const n=uo(Vi.h,$o.h,t),i=uo(Vi.s,$o.s,t),s=uo(Vi.l,$o.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new nt;nt.NAMES=vd;let z_=0;class Fo extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Ts,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=gc,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_c&&(n.blendSrc=this.blendSrc),this.blendDst!==gc&&(n.blendDst=this.blendDst),this.blendEquation!==yr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Pu extends Fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new B,jo=new qe;class mi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_s(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_s(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_s(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_s(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),e}}class xd extends mi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Md extends mi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jt extends mi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let k_=0;const Vn=new Ut,zl=new yn,os=new B,Ln=new Oo,$s=new Oo,Xt=new B;class kn extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dd(e)?Md:xd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return zl.lookAt(e),zl.updateMatrix(),this.applyMatrix4(zl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(Ln.min,$s.min),Ln.expandByPoint(Xt),Xt.addVectors(Ln.max,$s.max),Ln.expandByPoint(Xt)):(Ln.expandByPoint($s.min),Ln.expandByPoint($s.max))}Ln.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Xt.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(e,c),Xt.add(os)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new B,l[L]=new B;const c=new B,u=new B,d=new B,f=new qe,h=new qe,g=new qe,_=new B,p=new B;function m(L,S,x){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,x),f.fromBufferAttribute(s,L),h.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const P=1/(h.x*g.y-g.x*h.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(P),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(P),o[L].add(_),o[S].add(_),o[x].add(_),l[L].add(p),l[S].add(p),l[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,S=E.length;L<S;++L){const x=E[L],P=x.start,U=x.count;for(let z=P,K=P+U;z<K;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new B,T=new B,C=new B,w=new B;function A(L){C.fromBufferAttribute(i,L),w.copy(C);const S=o[L];M.copy(S),M.sub(C.multiplyScalar(C.dot(S))).normalize(),T.crossVectors(w,S);const P=T.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,P)}for(let L=0,S=E.length;L<S;++L){const x=E[L],P=x.start,U=x.count;for(let z=P,K=P+U;z<K;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[h++]}return new mi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rh=new Ut,fr=new Ru,Jo=new fl,Ph=new B,as=new B,ls=new B,cs=new B,kl=new B,Qo=new B,ea=new qe,ta=new qe,na=new qe,Lh=new B,Dh=new B,Ih=new B,ia=new B,ra=new B;class fi extends yn{constructor(e=new kn,t=new Pu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(kl.fromBufferAttribute(d,e),a?Qo.addScaledVector(kl,u):Qo.addScaledVector(kl.sub(t),u))}t.add(Qo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Jo.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Jo,Ph)===null||fr.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Rh.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Rh),!(n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],E=Math.max(p.start,h.start),M=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let T=E,C=M;T<C;T+=3){const w=o.getX(T),A=o.getX(T+1),L=o.getX(T+2);i=sa(this,m,e,n,c,u,d,w,A,L),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const E=o.getX(p),M=o.getX(p+1),T=o.getX(p+2);i=sa(this,a,e,n,c,u,d,E,M,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=a[p.materialIndex],E=Math.max(p.start,h.start),M=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let T=E,C=M;T<C;T+=3){const w=T,A=T+1,L=T+2;i=sa(this,m,e,n,c,u,d,w,A,L),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const E=p,M=p+1,T=p+2;i=sa(this,a,e,n,c,u,d,E,M,T),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function H_(r,e,t,n,i,s,a,o){let l;if(e.side===Mn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===ir,o),l===null)return null;ra.copy(o),ra.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:r}}function sa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,as),r.getVertexPosition(l,ls),r.getVertexPosition(c,cs);const u=H_(r,e,t,n,as,ls,cs,ia);if(u){i&&(ea.fromBufferAttribute(i,o),ta.fromBufferAttribute(i,l),na.fromBufferAttribute(i,c),u.uv=ui.getInterpolation(ia,as,ls,cs,ea,ta,na,new qe)),s&&(ea.fromBufferAttribute(s,o),ta.fromBufferAttribute(s,l),na.fromBufferAttribute(s,c),u.uv1=ui.getInterpolation(ia,as,ls,cs,ea,ta,na,new qe)),a&&(Lh.fromBufferAttribute(a,o),Dh.fromBufferAttribute(a,l),Ih.fromBufferAttribute(a,c),u.normal=ui.getInterpolation(ia,as,ls,cs,Lh,Dh,Ih,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};ui.getNormal(as,ls,cs,d.normal),u.face=d}return u}class Bo extends kn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(d,2));function g(_,p,m,E,M,T,C,w,A,L,S){const x=T/A,P=C/L,U=T/2,z=C/2,K=w/2,$=A+1,W=L+1;let X=0,H=0;const oe=new B;for(let D=0;D<W;D++){const ce=D*P-z;for(let ze=0;ze<$;ze++){const Ye=ze*x-U;oe[_]=Ye*E,oe[p]=ce*M,oe[m]=K,c.push(oe.x,oe.y,oe.z),oe[_]=0,oe[p]=0,oe[m]=w>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(ze/A),d.push(1-D/L),X+=1}}for(let D=0;D<L;D++)for(let ce=0;ce<A;ce++){const ze=f+ce+$*D,Ye=f+ce+$*(D+1),j=f+(ce+1)+$*(D+1),ee=f+(ce+1)+$*D;l.push(ze,Ye,ee),l.push(Ye,j,ee),H+=6}o.addGroup(h,H,S),h+=H,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function fn(r){const e={};for(let t=0;t<r.length;t++){const n=Bs(r[t]);for(const i in n)e[i]=n[i]}return e}function V_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Sd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const G_={clone:Bs,merge:fn};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends Fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=X_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Lu=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Gi=new B,Uh=new qe,Nh=new qe;class Wn extends Lu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Uh,Nh),t.subVectors(Nh,Uh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,hs=1;class Y_ extends yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wn(us,hs,e,t);i.layers=this.layers,this.add(i);const s=new Wn(us,hs,e,t);s.layers=this.layers,this.add(s);const a=new Wn(us,hs,e,t);a.layers=this.layers,this.add(a);const o=new Wn(us,hs,e,t);o.layers=this.layers,this.add(o);const l=new Wn(us,hs,e,t);l.layers=this.layers,this.add(l);const c=new Wn(us,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yd extends Sn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Us,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class q_ extends Fr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bo(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Ji});s.uniforms.tEquirect.value=t;const a=new fi(i,s),o=t.minFilter;return t.minFilter===Ar&&(t.minFilter=ri),new Y_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Hl=new B,Z_=new B,K_=new je;class Xi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Hl.subVectors(n,t).cross(Z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||K_.getNormalMatrix(e),i=this.coplanarPoint(Hl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new fl,oa=new B;class Ed{constructor(e=new Xi,t=new Xi,n=new Xi,i=new Xi,s=new Xi,a=new Xi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],h=i[8],g=i[9],_=i[10],p=i[11],m=i[12],E=i[13],M=i[14],T=i[15];if(n[0].setComponents(l-s,f-c,p-h,T-m).normalize(),n[1].setComponents(l+s,f+c,p+h,T+m).normalize(),n[2].setComponents(l+a,f+u,p+g,T+E).normalize(),n[3].setComponents(l-a,f-u,p-g,T-E).normalize(),n[4].setComponents(l-o,f-d,p-_,T-M).normalize(),t===Pi)n[5].setComponents(l+o,f+d,p+_,T+M).normalize();else if(t===Za)n[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(oa.x=i.normal.x>0?e.max.x:e.min.x,oa.y=i.normal.y>0?e.max.y:e.min.y,oa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Td(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function $_(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,o),d.count===-1&&f.length===0&&r.bufferSubData(c,0,u),f.length!==0){for(let h=0,g=f.length;h<g;h++){const _=f[h];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(r.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class dl extends kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const E=m*f-a;for(let M=0;M<c;M++){const T=M*d-s;g.push(T,-E,0),_.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const M=E+c*m,T=E+c*(m+1),C=E+1+c*(m+1),w=E+1+c*m;h.push(M,T,w),h.push(T,C,w)}this.setIndex(h),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.widthSegments,e.heightSegments)}}var j_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ig=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ug=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$g=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,o0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,M0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,A0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Av=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:j_,alphahash_pars_fragment:J_,alphamap_fragment:Q_,alphamap_pars_fragment:eg,alphatest_fragment:tg,alphatest_pars_fragment:ng,aomap_fragment:ig,aomap_pars_fragment:rg,batching_pars_vertex:sg,batching_vertex:og,begin_vertex:ag,beginnormal_vertex:lg,bsdfs:cg,iridescence_fragment:ug,bumpmap_pars_fragment:hg,clipping_planes_fragment:fg,clipping_planes_pars_fragment:dg,clipping_planes_pars_vertex:pg,clipping_planes_vertex:mg,color_fragment:_g,color_pars_fragment:gg,color_pars_vertex:vg,color_vertex:xg,common:Mg,cube_uv_reflection_fragment:Sg,defaultnormal_vertex:yg,displacementmap_pars_vertex:Eg,displacementmap_vertex:Tg,emissivemap_fragment:bg,emissivemap_pars_fragment:Ag,colorspace_fragment:wg,colorspace_pars_fragment:Cg,envmap_fragment:Rg,envmap_common_pars_fragment:Pg,envmap_pars_fragment:Lg,envmap_pars_vertex:Dg,envmap_physical_pars_fragment:Gg,envmap_vertex:Ig,fog_vertex:Ug,fog_pars_vertex:Ng,fog_fragment:Og,fog_pars_fragment:Fg,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:zg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Hg,lights_pars_begin:Vg,lights_toon_fragment:Wg,lights_toon_pars_fragment:Xg,lights_phong_fragment:Yg,lights_phong_pars_fragment:qg,lights_physical_fragment:Zg,lights_physical_pars_fragment:Kg,lights_fragment_begin:$g,lights_fragment_maps:jg,lights_fragment_end:Jg,logdepthbuf_fragment:Qg,logdepthbuf_pars_fragment:e0,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:r0,map_particle_fragment:s0,map_particle_pars_fragment:o0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:l0,morphinstance_vertex:c0,morphcolor_vertex:u0,morphnormal_vertex:h0,morphtarget_pars_vertex:f0,morphtarget_vertex:d0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:_0,normal_pars_vertex:g0,normal_vertex:v0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:M0,clearcoat_normal_fragment_maps:S0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:E0,opaque_fragment:T0,packing:b0,premultiplied_alpha_fragment:A0,project_vertex:w0,dithering_fragment:C0,dithering_pars_fragment:R0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:L0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:I0,shadowmap_vertex:U0,shadowmask_pars_fragment:N0,skinbase_vertex:O0,skinning_pars_vertex:F0,skinning_vertex:B0,skinnormal_vertex:z0,specularmap_fragment:k0,specularmap_pars_fragment:H0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:Y0,uv_pars_vertex:q0,uv_vertex:Z0,worldpos_vertex:K0,background_vert:$0,background_frag:j0,backgroundCube_vert:J0,backgroundCube_frag:Q0,cube_vert:ev,cube_frag:tv,depth_vert:nv,depth_frag:iv,distanceRGBA_vert:rv,distanceRGBA_frag:sv,equirect_vert:ov,equirect_frag:av,linedashed_vert:lv,linedashed_frag:cv,meshbasic_vert:uv,meshbasic_frag:hv,meshlambert_vert:fv,meshlambert_frag:dv,meshmatcap_vert:pv,meshmatcap_frag:mv,meshnormal_vert:_v,meshnormal_frag:gv,meshphong_vert:vv,meshphong_frag:xv,meshphysical_vert:Mv,meshphysical_frag:Sv,meshtoon_vert:yv,meshtoon_frag:Ev,points_vert:Tv,points_frag:bv,shadow_vert:Av,shadow_frag:wv,sprite_vert:Cv,sprite_frag:Rv},pe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ci={basic:{uniforms:fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new nt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:fn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:fn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new nt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:fn([pe.points,pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:fn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:fn([pe.common,pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:fn([pe.sprite,pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:fn([pe.common,pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:fn([pe.lights,pe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ci.physical={uniforms:fn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const aa={r:0,b:0,g:0},pr=new Ui,Pv=new Ut;function Lv(r,e,t,n,i,s,a){const o=new nt(0);let l=s===!0?0:1,c,u,d=null,f=0,h=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function _(E){let M=!1;const T=g(E);T===null?m(o,l):T&&T.isColor&&(m(T,1),M=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(E,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===ul)?(u===void 0&&(u=new fi(new Bo(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Bs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),pr.copy(M.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(pr)),u.material.toneMapped=dt.getTransfer(T.colorSpace)!==yt,(d!==T||f!==T.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,h=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new fi(new dl(2,2),new rr({name:"BackgroundMaterial",uniforms:Bs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=dt.getTransfer(T.colorSpace)!==yt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,h=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,M){E.getRGB(aa,Sd(r)),n.buffers.color.setClear(aa.r,aa.g,aa.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(o,l)},render:_,addToRenderList:p}}function Dv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(x,P,U,z,K){let $=!1;const W=d(z,U,P);s!==W&&(s=W,c(s.object)),$=h(x,z,U,K),$&&g(x,z,U,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,T(x,P,U,z),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function d(x,P,U){const z=U.wireframe===!0;let K=n[x.id];K===void 0&&(K={},n[x.id]=K);let $=K[P.id];$===void 0&&($={},K[P.id]=$);let W=$[z];return W===void 0&&(W=f(l()),$[z]=W),W}function f(x){const P=[],U=[],z=[];for(let K=0;K<t;K++)P[K]=0,U[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:z,object:x,attributes:{},index:null}}function h(x,P,U,z){const K=s.attributes,$=P.attributes;let W=0;const X=U.getAttributes();for(const H in X)if(X[H].location>=0){const D=K[H];let ce=$[H];if(ce===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),D===void 0||D.attribute!==ce||ce&&D.data!==ce.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(x,P,U,z){const K={},$=P.attributes;let W=0;const X=U.getAttributes();for(const H in X)if(X[H].location>=0){let D=$[H];D===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(D=x.instanceColor));const ce={};ce.attribute=D,D&&D.data&&(ce.data=D.data),K[H]=ce,W++}s.attributes=K,s.attributesNum=W,s.index=z}function _(){const x=s.newAttributes;for(let P=0,U=x.length;P<U;P++)x[P]=0}function p(x){m(x,0)}function m(x,P){const U=s.newAttributes,z=s.enabledAttributes,K=s.attributeDivisors;U[x]=1,z[x]===0&&(r.enableVertexAttribArray(x),z[x]=1),K[x]!==P&&(r.vertexAttribDivisor(x,P),K[x]=P)}function E(){const x=s.newAttributes,P=s.enabledAttributes;for(let U=0,z=P.length;U<z;U++)P[U]!==x[U]&&(r.disableVertexAttribArray(U),P[U]=0)}function M(x,P,U,z,K,$,W){W===!0?r.vertexAttribIPointer(x,P,U,K,$):r.vertexAttribPointer(x,P,U,z,K,$)}function T(x,P,U,z){_();const K=z.attributes,$=U.getAttributes(),W=P.defaultAttributeValues;for(const X in $){const H=$[X];if(H.location>=0){let oe=K[X];if(oe===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),oe!==void 0){const D=oe.normalized,ce=oe.itemSize,ze=e.get(oe);if(ze===void 0)continue;const Ye=ze.buffer,j=ze.type,ee=ze.bytesPerElement,he=j===r.INT||j===r.UNSIGNED_INT||oe.gpuType===Su;if(oe.isInterleavedBufferAttribute){const le=oe.data,Ae=le.stride,Re=oe.offset;if(le.isInstancedInterleavedBuffer){for(let We=0;We<H.locationSize;We++)m(H.location+We,le.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let We=0;We<H.locationSize;We++)p(H.location+We);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let We=0;We<H.locationSize;We++)M(H.location+We,ce/H.locationSize,j,D,Ae*ee,(Re+ce/H.locationSize*We)*ee,he)}else{if(oe.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)m(H.location+le,oe.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let le=0;le<H.locationSize;le++)p(H.location+le);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let le=0;le<H.locationSize;le++)M(H.location+le,ce/H.locationSize,j,D,ce*ee,ce/H.locationSize*le*ee,he)}}else if(W!==void 0){const D=W[X];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(H.location,D);break;case 3:r.vertexAttrib3fv(H.location,D);break;case 4:r.vertexAttrib4fv(H.location,D);break;default:r.vertexAttrib1fv(H.location,D)}}}}E()}function C(){L();for(const x in n){const P=n[x];for(const U in P){const z=P[U];for(const K in z)u(z[K].object),delete z[K];delete P[U]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const U in P){const z=P[U];for(const K in z)u(z[K].object),delete z[K];delete P[U]}delete n[x.id]}function A(x){for(const P in n){const U=n[P];if(U[x.id]===void 0)continue;const z=U[x.id];for(const K in z)u(z[K].object),delete z[K];delete U[x.id]}}function L(){S(),a=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function Iv(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,n,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,n,f[_])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Uv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==si&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===No&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ii&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ri&&!A)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=h>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:T,maxSamples:C}}function Nv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Xi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const E=s?0:n,M=E*4;let T=m.clippingState||null;l.value=T,T=u(g,f,M,h);for(let C=0;C!==M;++C)T[C]=t[C];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,T=h;M!==_;++M,T+=4)a.copy(d[M]).applyMatrix4(E,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Ov(r){let e=new WeakMap;function t(a,o){return o===vc?a.mapping=Us:o===xc&&(a.mapping=Ns),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===vc||o===xc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new q_(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class bd extends Lu{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=4,Oh=[.125,.215,.35,.446,.526,.582],Er=20,Vl=new bd,Fh=new nt;let Gl=null,Wl=0,Xl=0,Yl=!1;const vr=(1+Math.sqrt(5))/2,fs=1/vr,Bh=[new B(-vr,fs,0),new B(vr,fs,0),new B(-fs,0,vr),new B(fs,0,vr),new B(0,vr,-fs),new B(0,vr,fs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gl,Wl,Xl),this._renderer.xr.enabled=Yl,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:No,format:si,colorSpace:lr,depthBuffer:!1},i=kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fv(s)),this._blurMaterial=Bv(s,e,t)}return i}_compileMaterial(e){const t=new fi(this._lodPlanes[0],e);this._renderer.compile(t,Vl)}_sceneToCubeUV(e,t,n,i){const o=new Wn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Fh),u.toneMapping=Qi,u.autoClear=!1;const h=new Pu({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),g=new fi(new Bo,h);let _=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,_=!0):(h.color.copy(Fh),_=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):E===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const M=this._cubeSize;la(i,E*M,m>2?M:0,M,M),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Us||e.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new fi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;la(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Vl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bh[(i-s-1)%Bh.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new fi(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Er-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Er;p>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Er}`);const m=[];let E=0;for(let A=0;A<Er;++A){const L=A/_,S=Math.exp(-L*L/2);m.push(S),A===0?E+=S:A<p&&(E+=2*S)}for(let A=0;A<m.length;A++)m[A]=m[A]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const T=this._sizeLods[i],C=3*T*(i>M-xs?i-M+xs:0),w=4*(this._cubeSize-T);la(t,C,w,3*T,2*T),l.setRenderTarget(t),l.render(d,Vl)}}function Fv(r){const e=[],t=[],n=[];let i=r;const s=r-xs+1+Oh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-xs?l=Oh[a-r+xs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,p=2,m=1,E=new Float32Array(_*g*h),M=new Float32Array(p*g*h),T=new Float32Array(m*g*h);for(let w=0;w<h;w++){const A=w%3*2/3-1,L=w>2?0:-1,S=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];E.set(S,_*g*w),M.set(f,p*g*w);const x=[w,w,w,w,w,w];T.set(x,m*g*w)}const C=new kn;C.setAttribute("position",new mi(E,_)),C.setAttribute("uv",new mi(M,p)),C.setAttribute("faceIndex",new mi(T,m)),e.push(C),i>xs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kh(r,e,t){const n=new Fr(r,e,t);return n.texture.mapping=ul,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Bv(r,e,t){const n=new Float32Array(Er),i=new B(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Hh(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Vh(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vc||l===xc,u=l===Us||l===Ns;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new zh(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new zh(r)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function kv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&pd("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hv(r,e,t,n){const i={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const _=h[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(h!==null){const E=h.array;_=h.version;for(let M=0,T=E.length;M<T;M+=3){const C=E[M+0],w=E[M+1],A=E[M+2];f.push(C,w,w,A,A,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,T=E.length/3-1;M<T;M+=3){const C=M+0,w=M+1,A=M+2;f.push(C,w,w,A,A,C)}}else return;const p=new(dd(f)?Md:xd)(f,1);p.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Vv(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,f*a,g),t.update(h,n,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];t.update(p,n,1)}function d(f,h,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,h[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,_,0,g);let m=0;for(let E=0;E<g;E++)m+=h[E];for(let E=0;E<_.length;E++)t.update(m,n,_[E])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Gv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wv(r,e,t){const n=new WeakMap,i=new $t;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let x=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),p===!0&&(T=3);let C=o.attributes.position.count*T,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*w*4*d),L=new _d(A,C,w,d);L.type=Ri,L.needsUpdate=!0;const S=T*4;for(let P=0;P<d;P++){const U=m[P],z=E[P],K=M[P],$=C*w*4*P;for(let W=0;W<U.count;W++){const X=W*S;g===!0&&(i.fromBufferAttribute(U,W),A[$+X+0]=i.x,A[$+X+1]=i.y,A[$+X+2]=i.z,A[$+X+3]=0),_===!0&&(i.fromBufferAttribute(z,W),A[$+X+4]=i.x,A[$+X+5]=i.y,A[$+X+6]=i.z,A[$+X+7]=0),p===!0&&(i.fromBufferAttribute(K,W),A[$+X+8]=i.x,A[$+X+9]=i.y,A[$+X+10]=i.z,A[$+X+11]=K.itemSize===4?i.w:1)}}f={count:d,texture:L,size:new qe(C,w)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Xv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Ad extends Sn{constructor(e,t,n,i,s,a,o,l,c,u=bs){if(u!==bs&&u!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===bs&&(n=Or),n===void 0&&u===Fs&&(n=Os),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:qn,this.minFilter=l!==void 0?l:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wd=new Sn,Gh=new Ad(1,1),Cd=new _d,Rd=new L_,Pd=new yd,Wh=[],Xh=[],Yh=new Float32Array(16),qh=new Float32Array(9),Zh=new Float32Array(4);function Ys(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wh[i];if(s===void 0&&(s=new Float32Array(i),Wh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Gt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function pl(r,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Yv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2fv(this.addr,e),Wt(t,e)}}function Zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;r.uniform3fv(this.addr,e),Wt(t,e)}}function Kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4fv(this.addr,e),Wt(t,e)}}function $v(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Zh.set(n),r.uniformMatrix2fv(this.addr,!1,Zh),Wt(t,n)}}function jv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;qh.set(n),r.uniformMatrix3fv(this.addr,!1,qh),Wt(t,n)}}function Jv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;Yh.set(n),r.uniformMatrix4fv(this.addr,!1,Yh),Wt(t,n)}}function Qv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ex(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2iv(this.addr,e),Wt(t,e)}}function tx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3iv(this.addr,e),Wt(t,e)}}function nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4iv(this.addr,e),Wt(t,e)}}function ix(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;r.uniform2uiv(this.addr,e),Wt(t,e)}}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;r.uniform3uiv(this.addr,e),Wt(t,e)}}function ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;r.uniform4uiv(this.addr,e),Wt(t,e)}}function ax(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Gh.compareFunction=fd,s=Gh):s=wd,t.setTexture2D(e||s,i)}function lx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rd,i)}function cx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pd,i)}function ux(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cd,i)}function hx(r){switch(r){case 5126:return Yv;case 35664:return qv;case 35665:return Zv;case 35666:return Kv;case 35674:return $v;case 35675:return jv;case 35676:return Jv;case 5124:case 35670:return Qv;case 35667:case 35671:return ex;case 35668:case 35672:return tx;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return rx;case 36295:return sx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return ux}}function fx(r,e){r.uniform1fv(this.addr,e)}function dx(r,e){const t=Ys(e,this.size,2);r.uniform2fv(this.addr,t)}function px(r,e){const t=Ys(e,this.size,3);r.uniform3fv(this.addr,t)}function mx(r,e){const t=Ys(e,this.size,4);r.uniform4fv(this.addr,t)}function _x(r,e){const t=Ys(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gx(r,e){const t=Ys(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vx(r,e){const t=Ys(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xx(r,e){r.uniform1iv(this.addr,e)}function Mx(r,e){r.uniform2iv(this.addr,e)}function Sx(r,e){r.uniform3iv(this.addr,e)}function yx(r,e){r.uniform4iv(this.addr,e)}function Ex(r,e){r.uniform1uiv(this.addr,e)}function Tx(r,e){r.uniform2uiv(this.addr,e)}function bx(r,e){r.uniform3uiv(this.addr,e)}function Ax(r,e){r.uniform4uiv(this.addr,e)}function wx(r,e,t){const n=this.cache,i=e.length,s=pl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||wd,s[a])}function Cx(r,e,t){const n=this.cache,i=e.length,s=pl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Rd,s[a])}function Rx(r,e,t){const n=this.cache,i=e.length,s=pl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Pd,s[a])}function Px(r,e,t){const n=this.cache,i=e.length,s=pl(t,i);Gt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cd,s[a])}function Lx(r){switch(r){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return _x;case 35675:return gx;case 35676:return vx;case 5124:case 35670:return xx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return yx;case 5125:return Ex;case 36294:return Tx;case 36295:return bx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Px}}class Dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hx(t.type)}}class Ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lx(t.type)}}class Ux{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function Kh(r,e){r.seq.push(e),r.map[e.id]=e}function Nx(r,e,t){const n=r.name,i=n.length;for(ql.lastIndex=0;;){const s=ql.exec(n),a=ql.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Kh(t,c===void 0?new Dx(o,r,e):new Ix(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Ux(o),Kh(t,d)),t=d}}}class Ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Nx(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function $h(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ox=37297;let Fx=0;function Bx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function zx(r){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(r);let n;switch(e===t?n="":e===qa&&t===Ya?n="LinearDisplayP3ToLinearSRGB":e===Ya&&t===qa&&(n="LinearSRGBToLinearDisplayP3"),r){case lr:case hl:return[n,"LinearTransferOETF"];case oi:case wu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function jh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Bx(r.getShaderSource(e),a)}else return i}function kx(r,e){const t=zx(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hx(r,e){let t;switch(e){case Gm:t="Linear";break;case Wm:t="Reinhard";break;case ed:t="OptimizedCineon";break;case Xm:t="ACESFilmic";break;case qm:t="AgX";break;case Zm:t="Neutral";break;case Ym:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function Gx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function to(r){return r!==""}function Jh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(r){return r.replace(Xx,qx)}const Yx=new Map;function qx(r,e){let t=$e[e];if(t===void 0){const n=Yx.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zc(t)}const Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(r){return r.replace(Zx,Kx)}function Kx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function tf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $x(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===jf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Jf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function jx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Us:case Ns:e="ENVMAP_TYPE_CUBE";break;case ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function Qx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qf:e="ENVMAP_BLENDING_MULTIPLY";break;case Hm:e="ENVMAP_BLENDING_MIX";break;case Vm:e="ENVMAP_BLENDING_ADD";break}return e}function eM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tM(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=$x(t),c=jx(t),u=Jx(t),d=Qx(t),f=eM(t),h=Vx(t),g=Gx(s),_=i.createProgram();let p,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(to).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(to).join(`
`),m.length>0&&(m+=`
`)):(p=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),m=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?$e.tonemapping_pars_fragment:"",t.toneMapping!==Qi?Hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,kx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),a=Zc(a),a=Jh(a,t),a=Qh(a,t),o=Zc(o),o=Jh(o,t),o=Qh(o,t),a=ef(a),o=ef(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=E+p+a,T=E+m+o,C=$h(i,i.VERTEX_SHADER,M),w=$h(i,i.FRAGMENT_SHADER,T);i.attachShader(_,C),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(P){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),z=i.getShaderInfoLog(C).trim(),K=i.getShaderInfoLog(w).trim();let $=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,w);else{const X=jh(i,C,"vertex"),H=jh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+X+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||K==="")&&(W=!1);W&&(P.diagnostics={runnable:$,programLog:U,vertexShader:{log:z,prefix:p},fragmentShader:{log:K,prefix:m}})}i.deleteShader(C),i.deleteShader(w),L=new Ia(i,_),S=Wx(i,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Ox)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let nM=0;class iM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rM(e),t.set(e,n)),n}}class rM{constructor(e){this.id=nM++,this.code=e,this.usedTimes=0}}function sM(r,e,t,n,i,s,a){const o=new gd,l=new iM,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,x,P,U,z){const K=U.fog,$=z.geometry,W=S.isMeshStandardMaterial?U.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),H=X&&X.mapping===ul?X.image.height:null,oe=g[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const D=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ce=D!==void 0?D.length:0;let ze=0;$.morphAttributes.position!==void 0&&(ze=1),$.morphAttributes.normal!==void 0&&(ze=2),$.morphAttributes.color!==void 0&&(ze=3);let Ye,j,ee,he;if(oe){const Je=ci[oe];Ye=Je.vertexShader,j=Je.fragmentShader}else Ye=S.vertexShader,j=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),he=l.getFragmentShaderID(S);const le=r.getRenderTarget(),Ae=z.isInstancedMesh===!0,Re=z.isBatchedMesh===!0,We=!!S.map,Ze=!!S.matcap,I=!!X,Ie=!!S.aoMap,Ue=!!S.lightMap,Xe=!!S.bumpMap,ge=!!S.normalMap,Y=!!S.displacementMap,we=!!S.emissiveMap,Ne=!!S.metalnessMap,R=!!S.roughnessMap,y=S.anisotropy>0,q=S.clearcoat>0,te=S.dispersion>0,ne=S.iridescence>0,J=S.sheen>0,Ee=S.transmission>0,re=y&&!!S.anisotropyMap,ue=q&&!!S.clearcoatMap,De=q&&!!S.clearcoatNormalMap,se=q&&!!S.clearcoatRoughnessMap,me=ne&&!!S.iridescenceMap,Pe=ne&&!!S.iridescenceThicknessMap,ke=J&&!!S.sheenColorMap,_e=J&&!!S.sheenRoughnessMap,Be=!!S.specularMap,He=!!S.specularColorMap,at=!!S.specularIntensityMap,v=Ee&&!!S.transmissionMap,N=Ee&&!!S.thicknessMap,G=!!S.gradientMap,Z=!!S.alphaMap,Q=S.alphaTest>0,xe=!!S.alphaHash,Oe=!!S.extensions;let pt=Qi;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(pt=r.toneMapping);const ht={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:j,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:he,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Re,batchingColor:Re&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:lr,alphaToCoverage:!!S.alphaToCoverage,map:We,matcap:Ze,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:H,aoMap:Ie,lightMap:Ue,bumpMap:Xe,normalMap:ge,displacementMap:f&&Y,emissiveMap:we,normalMapObjectSpace:ge&&S.normalMapType===Qm,normalMapTangentSpace:ge&&S.normalMapType===Jm,metalnessMap:Ne,roughnessMap:R,anisotropy:y,anisotropyMap:re,clearcoat:q,clearcoatMap:ue,clearcoatNormalMap:De,clearcoatRoughnessMap:se,dispersion:te,iridescence:ne,iridescenceMap:me,iridescenceThicknessMap:Pe,sheen:J,sheenColorMap:ke,sheenRoughnessMap:_e,specularMap:Be,specularColorMap:He,specularIntensityMap:at,transmission:Ee,transmissionMap:v,thicknessMap:N,gradientMap:G,opaque:S.transparent===!1&&S.blending===Ts&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:Q,alphaHash:xe,combine:S.combine,mapUv:We&&_(S.map.channel),aoMapUv:Ie&&_(S.aoMap.channel),lightMapUv:Ue&&_(S.lightMap.channel),bumpMapUv:Xe&&_(S.bumpMap.channel),normalMapUv:ge&&_(S.normalMap.channel),displacementMapUv:Y&&_(S.displacementMap.channel),emissiveMapUv:we&&_(S.emissiveMap.channel),metalnessMapUv:Ne&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:re&&_(S.anisotropyMap.channel),clearcoatMapUv:ue&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(S.sheenRoughnessMap.channel),specularMapUv:Be&&_(S.specularMap.channel),specularColorMapUv:He&&_(S.specularColorMap.channel),specularIntensityMapUv:at&&_(S.specularIntensityMap.channel),transmissionMapUv:v&&_(S.transmissionMap.channel),thicknessMapUv:N&&_(S.thicknessMap.channel),alphaMapUv:Z&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ge||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(We||Z),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ze,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:pt,decodeVideoTexture:We&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wi,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Oe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&S.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function m(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)x.push(P),x.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(E(x,S),M(x,S),x.push(r.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),S.push(o.mask)}function T(S){const x=g[S.type];let P;if(x){const U=ci[x];P=G_.clone(U.uniforms)}else P=S.uniforms;return P}function C(S,x){let P;for(let U=0,z=u.length;U<z;U++){const K=u[U];if(K.cacheKey===x){P=K,++P.usedTimes;break}}return P===void 0&&(P=new tM(r,x,S,s),u.push(P)),P}function w(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:T,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:L}}function oM(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function aM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,h,g,_,p){let m=r[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},r[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),e++,m}function o(d,f,h,g,_,p){const m=a(d,f,h,g,_,p);h.transmission>0?n.push(m):h.transparent===!0?i.push(m):t.push(m)}function l(d,f,h,g,_,p){const m=a(d,f,h,g,_,p);h.transmission>0?n.unshift(m):h.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,f){t.length>1&&t.sort(d||aM),n.length>1&&n.sort(f||nf),i.length>1&&i.sort(f||nf)}function u(){for(let d=e,f=r.length;d<f;d++){const h=r[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function lM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new rf,r.set(n,[a])):i>=s.length?(a=new rf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function cM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new nt};break;case"SpotLight":t={position:new B,direction:new B,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function uM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let hM=0;function fM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function dM(r){const e=new cM,t=uM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new Ut,a=new Ut;function o(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,E=0,M=0,T=0,C=0,w=0,A=0;c.sort(fM);for(let S=0,x=c.length;S<x;S++){const P=c[S],U=P.color,z=P.intensity,K=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*z,d+=U.g*z,f+=U.b*z;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],z);A++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,H=t.get(P);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[h]=H,n.directionalShadowMap[h]=$,n.directionalShadowMatrix[h]=P.shadow.matrix,E++}n.directional[h]=W,h++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(U).multiplyScalar(z),W.distance=K,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const X=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,X.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=X.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=$,T++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(U).multiplyScalar(z),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=W,p++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const X=P.shadow,H=t.get(P);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(z),W.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[m]=W,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==h||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==E||L.numPointShadows!==M||L.numSpotShadows!==T||L.numSpotMaps!==C||L.numLightProbes!==A)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=T+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,L.directionalLength=h,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=E,L.numPointShadows=M,L.numSpotShadows=T,L.numSpotMaps=C,L.numLightProbes=A,n.version=hM++)}function l(c,u){let d=0,f=0,h=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const M=c[m];if(M.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),d++}else if(M.isSpotLight){const T=n.spot[h];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(p),h++}else if(M.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function sf(r){const e=new dM(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function pM(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new sf(r),e.set(i,[o])):s>=a.length?(o=new sf(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class mM extends Fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _M extends Fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xM(r,e,t){let n=new Ed;const i=new qe,s=new qe,a=new $t,o=new mM({depthPacking:jm}),l=new _M,c={},u=t.maxTextureSize,d={[ir]:Mn,[Mn]:ir,[wi]:wi},f=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:gM,fragmentShader:vM}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new kn;g.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fi(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jf;let m=this.type;this.render=function(w,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Ji),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=m!==Ti&&this.type===Ti,K=m===Ti&&this.type!==Ti;for(let $=0,W=w.length;$<W;$++){const X=w[$],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const oe=H.getFrameExtents();if(i.multiply(oe),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/oe.x),i.x=s.x*oe.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/oe.y),i.y=s.y*oe.y,H.mapSize.y=s.y)),H.map===null||z===!0||K===!0){const ce=this.type!==Ti?{minFilter:qn,magFilter:qn}:{};H.map!==null&&H.map.dispose(),H.map=new Fr(i.x,i.y,ce),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const D=H.getViewportCount();for(let ce=0;ce<D;ce++){const ze=H.getViewport(ce);a.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),U.viewport(a),H.updateMatrices(X,ce),n=H.getFrustum(),T(A,L,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Ti&&E(H,L),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(S,x,P)};function E(w,A){const L=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fr(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,L,f,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,L,h,_,null)}function M(w,A,L,S){let x=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=L.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const U=x.uuid,z=A.uuid;let K=c[U];K===void 0&&(K={},c[U]=K);let $=K[z];$===void 0&&($=x.clone(),K[z]=$,A.addEventListener("dispose",C)),x=$}if(x.visible=A.visible,x.wireframe=A.wireframe,S===Ti?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=r.properties.get(x);U.light=L}return x}function T(w,A,L,S,x){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Ti)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const z=e.update(w),K=w.material;if(Array.isArray(K)){const $=z.groups;for(let W=0,X=$.length;W<X;W++){const H=$[W],oe=K[H.materialIndex];if(oe&&oe.visible){const D=M(w,oe,S,x);w.onBeforeShadow(r,w,A,L,z,D,H),r.renderBufferDirect(L,null,z,D,w,H),w.onAfterShadow(r,w,A,L,z,D,H)}}}else if(K.visible){const $=M(w,K,S,x);w.onBeforeShadow(r,w,A,L,z,$,null),r.renderBufferDirect(L,null,z,$,w,null),w.onAfterShadow(r,w,A,L,z,$,null)}}const U=w.children;for(let z=0,K=U.length;z<K;z++)T(U[z],A,L,S,x)}function C(w){w.target.removeEventListener("dispose",C);for(const L in c){const S=c[L],x=w.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function MM(r){function e(){let v=!1;const N=new $t;let G=null;const Z=new $t(0,0,0,0);return{setMask:function(Q){G!==Q&&!v&&(r.colorMask(Q,Q,Q,Q),G=Q)},setLocked:function(Q){v=Q},setClear:function(Q,xe,Oe,pt,ht){ht===!0&&(Q*=pt,xe*=pt,Oe*=pt),N.set(Q,xe,Oe,pt),Z.equals(N)===!1&&(r.clearColor(Q,xe,Oe,pt),Z.copy(N))},reset:function(){v=!1,G=null,Z.set(-1,0,0,0)}}}function t(){let v=!1,N=null,G=null,Z=null;return{setTest:function(Q){Q?he(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function(Q){N!==Q&&!v&&(r.depthMask(Q),N=Q)},setFunc:function(Q){if(G!==Q){switch(Q){case Um:r.depthFunc(r.NEVER);break;case Nm:r.depthFunc(r.ALWAYS);break;case Om:r.depthFunc(r.LESS);break;case Wa:r.depthFunc(r.LEQUAL);break;case Fm:r.depthFunc(r.EQUAL);break;case Bm:r.depthFunc(r.GEQUAL);break;case zm:r.depthFunc(r.GREATER);break;case km:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}G=Q}},setLocked:function(Q){v=Q},setClear:function(Q){Z!==Q&&(r.clearDepth(Q),Z=Q)},reset:function(){v=!1,N=null,G=null,Z=null}}}function n(){let v=!1,N=null,G=null,Z=null,Q=null,xe=null,Oe=null,pt=null,ht=null;return{setTest:function(Je){v||(Je?he(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(Je){N!==Je&&!v&&(r.stencilMask(Je),N=Je)},setFunc:function(Je,Te,ve){(G!==Je||Z!==Te||Q!==ve)&&(r.stencilFunc(Je,Te,ve),G=Je,Z=Te,Q=ve)},setOp:function(Je,Te,ve){(xe!==Je||Oe!==Te||pt!==ve)&&(r.stencilOp(Je,Te,ve),xe=Je,Oe=Te,pt=ve)},setLocked:function(Je){v=Je},setClear:function(Je){ht!==Je&&(r.clearStencil(Je),ht=Je)},reset:function(){v=!1,N=null,G=null,Z=null,Q=null,xe=null,Oe=null,pt=null,ht=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],h=null,g=!1,_=null,p=null,m=null,E=null,M=null,T=null,C=null,w=new nt(0,0,0),A=0,L=!1,S=null,x=null,P=null,U=null,z=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,W=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=W>=1):X.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=W>=2);let H=null,oe={};const D=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),ze=new $t().fromArray(D),Ye=new $t().fromArray(ce);function j(v,N,G,Z){const Q=new Uint8Array(4),xe=r.createTexture();r.bindTexture(v,xe),r.texParameteri(v,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(v,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Oe=0;Oe<G;Oe++)v===r.TEXTURE_3D||v===r.TEXTURE_2D_ARRAY?r.texImage3D(N,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,Q):r.texImage2D(N+Oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Q);return xe}const ee={};ee[r.TEXTURE_2D]=j(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=j(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=j(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=j(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),he(r.DEPTH_TEST),s.setFunc(Wa),Xe(!1),ge(ch),he(r.CULL_FACE),Ie(Ji);function he(v){c[v]!==!0&&(r.enable(v),c[v]=!0)}function le(v){c[v]!==!1&&(r.disable(v),c[v]=!1)}function Ae(v,N){return u[v]!==N?(r.bindFramebuffer(v,N),u[v]=N,v===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=N),v===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=N),!0):!1}function Re(v,N){let G=f,Z=!1;if(v){G=d.get(N),G===void 0&&(G=[],d.set(N,G));const Q=v.textures;if(G.length!==Q.length||G[0]!==r.COLOR_ATTACHMENT0){for(let xe=0,Oe=Q.length;xe<Oe;xe++)G[xe]=r.COLOR_ATTACHMENT0+xe;G.length=Q.length,Z=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,Z=!0);Z&&r.drawBuffers(G)}function We(v){return h!==v?(r.useProgram(v),h=v,!0):!1}const Ze={[yr]:r.FUNC_ADD,[gm]:r.FUNC_SUBTRACT,[vm]:r.FUNC_REVERSE_SUBTRACT};Ze[xm]=r.MIN,Ze[Mm]=r.MAX;const I={[Sm]:r.ZERO,[ym]:r.ONE,[Em]:r.SRC_COLOR,[_c]:r.SRC_ALPHA,[Rm]:r.SRC_ALPHA_SATURATE,[wm]:r.DST_COLOR,[bm]:r.DST_ALPHA,[Tm]:r.ONE_MINUS_SRC_COLOR,[gc]:r.ONE_MINUS_SRC_ALPHA,[Cm]:r.ONE_MINUS_DST_COLOR,[Am]:r.ONE_MINUS_DST_ALPHA,[Pm]:r.CONSTANT_COLOR,[Lm]:r.ONE_MINUS_CONSTANT_COLOR,[Dm]:r.CONSTANT_ALPHA,[Im]:r.ONE_MINUS_CONSTANT_ALPHA};function Ie(v,N,G,Z,Q,xe,Oe,pt,ht,Je){if(v===Ji){g===!0&&(le(r.BLEND),g=!1);return}if(g===!1&&(he(r.BLEND),g=!0),v!==_m){if(v!==_||Je!==L){if((p!==yr||M!==yr)&&(r.blendEquation(r.FUNC_ADD),p=yr,M=yr),Je)switch(v){case Ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uh:r.blendFunc(r.ONE,r.ONE);break;case hh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case Ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case uh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case hh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}m=null,E=null,T=null,C=null,w.set(0,0,0),A=0,_=v,L=Je}return}Q=Q||N,xe=xe||G,Oe=Oe||Z,(N!==p||Q!==M)&&(r.blendEquationSeparate(Ze[N],Ze[Q]),p=N,M=Q),(G!==m||Z!==E||xe!==T||Oe!==C)&&(r.blendFuncSeparate(I[G],I[Z],I[xe],I[Oe]),m=G,E=Z,T=xe,C=Oe),(pt.equals(w)===!1||ht!==A)&&(r.blendColor(pt.r,pt.g,pt.b,ht),w.copy(pt),A=ht),_=v,L=!1}function Ue(v,N){v.side===wi?le(r.CULL_FACE):he(r.CULL_FACE);let G=v.side===Mn;N&&(G=!G),Xe(G),v.blending===Ts&&v.transparent===!1?Ie(Ji):Ie(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),s.setFunc(v.depthFunc),s.setTest(v.depthTest),s.setMask(v.depthWrite),i.setMask(v.colorWrite);const Z=v.stencilWrite;a.setTest(Z),Z&&(a.setMask(v.stencilWriteMask),a.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),a.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),we(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(v){S!==v&&(v?r.frontFace(r.CW):r.frontFace(r.CCW),S=v)}function ge(v){v!==pm?(he(r.CULL_FACE),v!==x&&(v===ch?r.cullFace(r.BACK):v===mm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),x=v}function Y(v){v!==P&&($&&r.lineWidth(v),P=v)}function we(v,N,G){v?(he(r.POLYGON_OFFSET_FILL),(U!==N||z!==G)&&(r.polygonOffset(N,G),U=N,z=G)):le(r.POLYGON_OFFSET_FILL)}function Ne(v){v?he(r.SCISSOR_TEST):le(r.SCISSOR_TEST)}function R(v){v===void 0&&(v=r.TEXTURE0+K-1),H!==v&&(r.activeTexture(v),H=v)}function y(v,N,G){G===void 0&&(H===null?G=r.TEXTURE0+K-1:G=H);let Z=oe[G];Z===void 0&&(Z={type:void 0,texture:void 0},oe[G]=Z),(Z.type!==v||Z.texture!==N)&&(H!==G&&(r.activeTexture(G),H=G),r.bindTexture(v,N||ee[v]),Z.type=v,Z.texture=N)}function q(){const v=oe[H];v!==void 0&&v.type!==void 0&&(r.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function te(){try{r.compressedTexImage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ee(){try{r.texSubImage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function De(){try{r.texStorage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Pe(){try{r.texImage3D.apply(r,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ke(v){ze.equals(v)===!1&&(r.scissor(v.x,v.y,v.z,v.w),ze.copy(v))}function _e(v){Ye.equals(v)===!1&&(r.viewport(v.x,v.y,v.z,v.w),Ye.copy(v))}function Be(v,N){let G=l.get(N);G===void 0&&(G=new WeakMap,l.set(N,G));let Z=G.get(v);Z===void 0&&(Z=r.getUniformBlockIndex(N,v.name),G.set(v,Z))}function He(v,N){const Z=l.get(N).get(v);o.get(N)!==Z&&(r.uniformBlockBinding(N,Z,v.__bindingPointIndex),o.set(N,Z))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},H=null,oe={},u={},d=new WeakMap,f=[],h=null,g=!1,_=null,p=null,m=null,E=null,M=null,T=null,C=null,w=new nt(0,0,0),A=0,L=!1,S=null,x=null,P=null,U=null,z=null,ze.set(0,0,r.canvas.width,r.canvas.height),Ye.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:he,disable:le,bindFramebuffer:Ae,drawBuffers:Re,useProgram:We,setBlending:Ie,setMaterial:Ue,setFlipSided:Xe,setCullFace:ge,setLineWidth:Y,setPolygonOffset:we,setScissorTest:Ne,activeTexture:R,bindTexture:y,unbindTexture:q,compressedTexImage2D:te,compressedTexImage3D:ne,texImage2D:me,texImage3D:Pe,updateUBOMapping:Be,uniformBlockBinding:He,texStorage2D:De,texStorage3D:se,texSubImage2D:J,texSubImage3D:Ee,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:ke,viewport:_e,reset:at}}function of(r,e,t,n){const i=SM(n);switch(t){case sd:return r*e;case ad:return r*e;case ld:return r*e*2;case cd:return r*e/i.components*i.byteLength;case Tu:return r*e/i.components*i.byteLength;case ud:return r*e*2/i.components*i.byteLength;case bu:return r*e*2/i.components*i.byteLength;case od:return r*e*3/i.components*i.byteLength;case si:return r*e*4/i.components*i.byteLength;case Au:return r*e*4/i.components*i.byteLength;case Ca:case Ra:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pa:case La:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ec:case bc:return Math.max(r,16)*Math.max(e,8)/4;case yc:case Tc:return Math.max(r,8)*Math.max(e,8)/2;case Ac:case wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case zc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case kc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Da:case Gc:case Wc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case hd:case Xc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Yc:case qc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function SM(r){switch(r){case Ii:case nd:return{byteLength:1,components:1};case To:case id:case No:return{byteLength:2,components:1};case yu:case Eu:return{byteLength:2,components:4};case Or:case Su:case Ri:return{byteLength:4,components:1};case rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function yM(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return h?new OffscreenCanvas(R,y):Ka("canvas")}function _(R,y,q){let te=1;const ne=Ne(R);if((ne.width>q||ne.height>q)&&(te=q/Math.max(ne.width,ne.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(te*ne.width),Ee=Math.floor(te*ne.height);d===void 0&&(d=g(J,Ee));const re=y?g(J,Ee):d;return re.width=J,re.height=Ee,re.getContext("2d").drawImage(R,0,0,J,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Ee+")."),re}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==qn&&R.minFilter!==ri}function m(R){r.generateMipmap(R)}function E(R,y,q,te,ne=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=y;if(y===r.RED&&(q===r.FLOAT&&(J=r.R32F),q===r.HALF_FLOAT&&(J=r.R16F),q===r.UNSIGNED_BYTE&&(J=r.R8)),y===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(J=r.R8UI),q===r.UNSIGNED_SHORT&&(J=r.R16UI),q===r.UNSIGNED_INT&&(J=r.R32UI),q===r.BYTE&&(J=r.R8I),q===r.SHORT&&(J=r.R16I),q===r.INT&&(J=r.R32I)),y===r.RG&&(q===r.FLOAT&&(J=r.RG32F),q===r.HALF_FLOAT&&(J=r.RG16F),q===r.UNSIGNED_BYTE&&(J=r.RG8)),y===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(J=r.RG8UI),q===r.UNSIGNED_SHORT&&(J=r.RG16UI),q===r.UNSIGNED_INT&&(J=r.RG32UI),q===r.BYTE&&(J=r.RG8I),q===r.SHORT&&(J=r.RG16I),q===r.INT&&(J=r.RG32I)),y===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),y===r.RGBA){const Ee=ne?Xa:dt.getTransfer(te);q===r.FLOAT&&(J=r.RGBA32F),q===r.HALF_FLOAT&&(J=r.RGBA16F),q===r.UNSIGNED_BYTE&&(J=Ee===yt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(R,y){let q;return R?y===null||y===Or||y===Os?q=r.DEPTH24_STENCIL8:y===Ri?q=r.DEPTH32F_STENCIL8:y===To&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Or||y===Os?q=r.DEPTH_COMPONENT24:y===Ri?q=r.DEPTH_COMPONENT32F:y===To&&(q=r.DEPTH_COMPONENT16),q}function T(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==qn&&R.minFilter!==ri?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){const y=R.target;y.removeEventListener("dispose",C),A(y),y.isVideoTexture&&u.delete(y)}function w(R){const y=R.target;y.removeEventListener("dispose",w),S(y)}function A(R){const y=n.get(R);if(y.__webglInit===void 0)return;const q=R.source,te=f.get(q);if(te){const ne=te[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(R),Object.keys(te).length===0&&f.delete(q)}n.remove(R)}function L(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const q=R.source,te=f.get(q);delete te[y.__cacheKey],a.memory.textures--}function S(R){const y=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(y.__webglFramebuffer[te]))for(let ne=0;ne<y.__webglFramebuffer[te].length;ne++)r.deleteFramebuffer(y.__webglFramebuffer[te][ne]);else r.deleteFramebuffer(y.__webglFramebuffer[te]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[te])}else{if(Array.isArray(y.__webglFramebuffer))for(let te=0;te<y.__webglFramebuffer.length;te++)r.deleteFramebuffer(y.__webglFramebuffer[te]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let te=0;te<y.__webglColorRenderbuffer.length;te++)y.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[te]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=R.textures;for(let te=0,ne=q.length;te<ne;te++){const J=n.get(q[te]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(q[te])}n.remove(R)}let x=0;function P(){x=0}function U(){const R=x;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),x+=1,R}function z(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function K(R,y){const q=n.get(R);if(R.isVideoTexture&&Y(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(q,R,y);return}}t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+y)}function $(R,y){const q=n.get(R);if(R.version>0&&q.__version!==R.version){Ye(q,R,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+y)}function W(R,y){const q=n.get(R);if(R.version>0&&q.__version!==R.version){Ye(q,R,y);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+y)}function X(R,y){const q=n.get(R);if(R.version>0&&q.__version!==R.version){j(q,R,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+y)}const H={[Mc]:r.REPEAT,[br]:r.CLAMP_TO_EDGE,[Sc]:r.MIRRORED_REPEAT},oe={[qn]:r.NEAREST,[Km]:r.NEAREST_MIPMAP_NEAREST,[Ho]:r.NEAREST_MIPMAP_LINEAR,[ri]:r.LINEAR,[El]:r.LINEAR_MIPMAP_NEAREST,[Ar]:r.LINEAR_MIPMAP_LINEAR},D={[e_]:r.NEVER,[o_]:r.ALWAYS,[t_]:r.LESS,[fd]:r.LEQUAL,[n_]:r.EQUAL,[s_]:r.GEQUAL,[i_]:r.GREATER,[r_]:r.NOTEQUAL};function ce(R,y){if(y.type===Ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ri||y.magFilter===El||y.magFilter===Ho||y.magFilter===Ar||y.minFilter===ri||y.minFilter===El||y.minFilter===Ho||y.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,H[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,H[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,H[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,oe[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,D[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qn||y.minFilter!==Ho&&y.minFilter!==Ar||y.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ze(R,y){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));const te=y.source;let ne=f.get(te);ne===void 0&&(ne={},f.set(te,ne));const J=z(y);if(J!==R.__cacheKey){ne[J]===void 0&&(ne[J]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ne[J].usedTimes++;const Ee=ne[R.__cacheKey];Ee!==void 0&&(ne[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&L(y)),R.__cacheKey=J,R.__webglTexture=ne[J].texture}return q}function Ye(R,y,q){let te=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=r.TEXTURE_3D);const ne=ze(R,y),J=y.source;t.bindTexture(te,R.__webglTexture,r.TEXTURE0+q);const Ee=n.get(J);if(J.version!==Ee.__version||ne===!0){t.activeTexture(r.TEXTURE0+q);const re=dt.getPrimaries(dt.workingColorSpace),ue=y.colorSpace===Yi?null:dt.getPrimaries(y.colorSpace),De=y.colorSpace===Yi||re===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let se=_(y.image,!1,i.maxTextureSize);se=we(y,se);const me=s.convert(y.format,y.colorSpace),Pe=s.convert(y.type);let ke=E(y.internalFormat,me,Pe,y.colorSpace,y.isVideoTexture);ce(te,y);let _e;const Be=y.mipmaps,He=y.isVideoTexture!==!0,at=Ee.__version===void 0||ne===!0,v=J.dataReady,N=T(y,se);if(y.isDepthTexture)ke=M(y.format===Fs,y.type),at&&(He?t.texStorage2D(r.TEXTURE_2D,1,ke,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,ke,se.width,se.height,0,me,Pe,null));else if(y.isDataTexture)if(Be.length>0){He&&at&&t.texStorage2D(r.TEXTURE_2D,N,ke,Be[0].width,Be[0].height);for(let G=0,Z=Be.length;G<Z;G++)_e=Be[G],He?v&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,_e.width,_e.height,me,Pe,_e.data):t.texImage2D(r.TEXTURE_2D,G,ke,_e.width,_e.height,0,me,Pe,_e.data);y.generateMipmaps=!1}else He?(at&&t.texStorage2D(r.TEXTURE_2D,N,ke,se.width,se.height),v&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,me,Pe,se.data)):t.texImage2D(r.TEXTURE_2D,0,ke,se.width,se.height,0,me,Pe,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,N,ke,Be[0].width,Be[0].height,se.depth);for(let G=0,Z=Be.length;G<Z;G++)if(_e=Be[G],y.format!==si)if(me!==null)if(He){if(v)if(y.layerUpdates.size>0){const Q=of(_e.width,_e.height,y.format,y.type);for(const xe of y.layerUpdates){const Oe=_e.data.subarray(xe*Q/_e.data.BYTES_PER_ELEMENT,(xe+1)*Q/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,xe,_e.width,_e.height,1,me,Oe,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,se.depth,me,_e.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,ke,_e.width,_e.height,se.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?v&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,se.depth,me,Pe,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,G,ke,_e.width,_e.height,se.depth,0,me,Pe,_e.data)}else{He&&at&&t.texStorage2D(r.TEXTURE_2D,N,ke,Be[0].width,Be[0].height);for(let G=0,Z=Be.length;G<Z;G++)_e=Be[G],y.format!==si?me!==null?He?v&&t.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,_e.width,_e.height,me,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,G,ke,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?v&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,_e.width,_e.height,me,Pe,_e.data):t.texImage2D(r.TEXTURE_2D,G,ke,_e.width,_e.height,0,me,Pe,_e.data)}else if(y.isDataArrayTexture)if(He){if(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,N,ke,se.width,se.height,se.depth),v)if(y.layerUpdates.size>0){const G=of(se.width,se.height,y.format,y.type);for(const Z of y.layerUpdates){const Q=se.data.subarray(Z*G/se.data.BYTES_PER_ELEMENT,(Z+1)*G/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,me,Pe,Q)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,Pe,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,me,Pe,se.data);else if(y.isData3DTexture)He?(at&&t.texStorage3D(r.TEXTURE_3D,N,ke,se.width,se.height,se.depth),v&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,Pe,se.data)):t.texImage3D(r.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,me,Pe,se.data);else if(y.isFramebufferTexture){if(at)if(He)t.texStorage2D(r.TEXTURE_2D,N,ke,se.width,se.height);else{let G=se.width,Z=se.height;for(let Q=0;Q<N;Q++)t.texImage2D(r.TEXTURE_2D,Q,ke,G,Z,0,me,Pe,null),G>>=1,Z>>=1}}else if(Be.length>0){if(He&&at){const G=Ne(Be[0]);t.texStorage2D(r.TEXTURE_2D,N,ke,G.width,G.height)}for(let G=0,Z=Be.length;G<Z;G++)_e=Be[G],He?v&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,me,Pe,_e):t.texImage2D(r.TEXTURE_2D,G,ke,me,Pe,_e);y.generateMipmaps=!1}else if(He){if(at){const G=Ne(se);t.texStorage2D(r.TEXTURE_2D,N,ke,G.width,G.height)}v&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,Pe,se)}else t.texImage2D(r.TEXTURE_2D,0,ke,me,Pe,se);p(y)&&m(te),Ee.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function j(R,y,q){if(y.image.length!==6)return;const te=ze(R,y),ne=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+q);const J=n.get(ne);if(ne.version!==J.__version||te===!0){t.activeTexture(r.TEXTURE0+q);const Ee=dt.getPrimaries(dt.workingColorSpace),re=y.colorSpace===Yi?null:dt.getPrimaries(y.colorSpace),ue=y.colorSpace===Yi||Ee===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const De=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!De&&!se?me[Z]=_(y.image[Z],!0,i.maxCubemapSize):me[Z]=se?y.image[Z].image:y.image[Z],me[Z]=we(y,me[Z]);const Pe=me[0],ke=s.convert(y.format,y.colorSpace),_e=s.convert(y.type),Be=E(y.internalFormat,ke,_e,y.colorSpace),He=y.isVideoTexture!==!0,at=J.__version===void 0||te===!0,v=ne.dataReady;let N=T(y,Pe);ce(r.TEXTURE_CUBE_MAP,y);let G;if(De){He&&at&&t.texStorage2D(r.TEXTURE_CUBE_MAP,N,Be,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){G=me[Z].mipmaps;for(let Q=0;Q<G.length;Q++){const xe=G[Q];y.format!==si?ke!==null?He?v&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q,0,0,xe.width,xe.height,ke,xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q,Be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?v&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q,0,0,xe.width,xe.height,ke,_e,xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q,Be,xe.width,xe.height,0,ke,_e,xe.data)}}}else{if(G=y.mipmaps,He&&at){G.length>0&&N++;const Z=Ne(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,N,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){He?v&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,ke,_e,me[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,me[Z].width,me[Z].height,0,ke,_e,me[Z].data);for(let Q=0;Q<G.length;Q++){const Oe=G[Q].image[Z].image;He?v&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q+1,0,0,Oe.width,Oe.height,ke,_e,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q+1,Be,Oe.width,Oe.height,0,ke,_e,Oe.data)}}else{He?v&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ke,_e,me[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,ke,_e,me[Z]);for(let Q=0;Q<G.length;Q++){const xe=G[Q];He?v&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q+1,0,0,ke,_e,xe.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q+1,Be,ke,_e,xe.image[Z])}}}p(y)&&m(r.TEXTURE_CUBE_MAP),J.__version=ne.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ee(R,y,q,te,ne,J){const Ee=s.convert(q.format,q.colorSpace),re=s.convert(q.type),ue=E(q.internalFormat,Ee,re,q.colorSpace);if(!n.get(y).__hasExternalTextures){const se=Math.max(1,y.width>>J),me=Math.max(1,y.height>>J);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,ue,se,me,y.depth,0,Ee,re,null):t.texImage2D(ne,J,ue,se,me,0,Ee,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ge(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ne,n.get(q).__webglTexture,0,Xe(y)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ne,n.get(q).__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function he(R,y,q){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){const te=y.depthTexture,ne=te&&te.isDepthTexture?te.type:null,J=M(y.stencilBuffer,ne),Ee=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=Xe(y);ge(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,J,y.width,y.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,J,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,J,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,R)}else{const te=y.textures;for(let ne=0;ne<te.length;ne++){const J=te[ne],Ee=s.convert(J.format,J.colorSpace),re=s.convert(J.type),ue=E(J.internalFormat,Ee,re,J.colorSpace),De=Xe(y);q&&ge(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,De,ue,y.width,y.height):ge(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De,ue,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ue,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function le(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const te=n.get(y.depthTexture).__webglTexture,ne=Xe(y);if(y.depthTexture.format===bs)ge(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(y.depthTexture.format===Fs)ge(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const y=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");le(y.__webglFramebuffer,R)}else if(q){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]=r.createRenderbuffer(),he(y.__webglDepthbuffer[te],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),he(y.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(R,y,q){const te=n.get(R);y!==void 0&&ee(te.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Ae(R)}function We(R){const y=R.texture,q=n.get(R),te=n.get(y);R.addEventListener("dispose",w);const ne=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=y.version,a.memory.textures++),J){q.__webglFramebuffer=[];for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[re]=[];for(let ue=0;ue<y.mipmaps.length;ue++)q.__webglFramebuffer[re][ue]=r.createFramebuffer()}else q.__webglFramebuffer[re]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let re=0;re<y.mipmaps.length;re++)q.__webglFramebuffer[re]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let re=0,ue=ne.length;re<ue;re++){const De=n.get(ne[re]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&ge(R)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let re=0;re<ne.length;re++){const ue=ne[re];q.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[re]);const De=s.convert(ue.format,ue.colorSpace),se=s.convert(ue.type),me=E(ue.internalFormat,De,se,ue.colorSpace,R.isXRRenderTarget===!0),Pe=Xe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,me,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,q.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),he(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),ce(r.TEXTURE_CUBE_MAP,y);for(let re=0;re<6;re++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)ee(q.__webglFramebuffer[re][ue],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else ee(q.__webglFramebuffer[re],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(y)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let re=0,ue=ne.length;re<ue;re++){const De=ne[re],se=n.get(De);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),ce(r.TEXTURE_2D,De),ee(q.__webglFramebuffer,R,De,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,0),p(De)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,te.__webglTexture),ce(re,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)ee(q.__webglFramebuffer[ue],R,y,r.COLOR_ATTACHMENT0,re,ue);else ee(q.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,re,0);p(y)&&m(re),t.unbindTexture()}R.depthBuffer&&Ae(R)}function Ze(R){const y=R.textures;for(let q=0,te=y.length;q<te;q++){const ne=y[q];if(p(ne)){const J=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ee=n.get(ne).__webglTexture;t.bindTexture(J,Ee),m(J),t.unbindTexture()}}}const I=[],Ie=[];function Ue(R){if(R.samples>0){if(ge(R)===!1){const y=R.textures,q=R.width,te=R.height;let ne=r.COLOR_BUFFER_BIT;const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=n.get(R),re=y.length>1;if(re)for(let ue=0;ue<y.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[ue]);const De=n.get(y[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,De,0)}r.blitFramebuffer(0,0,q,te,0,0,q,te,ne,r.NEAREST),l===!0&&(I.length=0,Ie.length=0,I.push(r.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(I.push(J),Ie.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<y.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[ue]);const De=n.get(y[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,De,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Xe(R){return Math.min(i.maxSamples,R.samples)}function ge(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Y(R){const y=a.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function we(R,y){const q=R.colorSpace,te=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==lr&&q!==Yi&&(dt.getTransfer(q)===yt?(te!==si||ne!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),y}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=Re,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=ge}function EM(r,e){function t(n,i=Yi){let s;const a=dt.getTransfer(i);if(n===Ii)return r.UNSIGNED_BYTE;if(n===yu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Eu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===rd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===nd)return r.BYTE;if(n===id)return r.SHORT;if(n===To)return r.UNSIGNED_SHORT;if(n===Su)return r.INT;if(n===Or)return r.UNSIGNED_INT;if(n===Ri)return r.FLOAT;if(n===No)return r.HALF_FLOAT;if(n===sd)return r.ALPHA;if(n===od)return r.RGB;if(n===si)return r.RGBA;if(n===ad)return r.LUMINANCE;if(n===ld)return r.LUMINANCE_ALPHA;if(n===bs)return r.DEPTH_COMPONENT;if(n===Fs)return r.DEPTH_STENCIL;if(n===cd)return r.RED;if(n===Tu)return r.RED_INTEGER;if(n===ud)return r.RG;if(n===bu)return r.RG_INTEGER;if(n===Au)return r.RGBA_INTEGER;if(n===Ca||n===Ra||n===Pa||n===La)if(a===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ca)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ca)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===Ec||n===Tc||n===bc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===wc||n===Cc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ac||n===wc)return a===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Cc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Rc||n===Pc||n===Lc||n===Dc||n===Ic||n===Uc||n===Nc||n===Oc||n===Fc||n===Bc||n===zc||n===kc||n===Hc||n===Vc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return a===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Da||n===Gc||n===Wc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Da)return a===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hd||n===Xc||n===Yc||n===qc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Da)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class TM extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ca extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bM={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ca;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const AM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Sn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rr({vertexShader:AM,fragmentShader:wM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fi(new dl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RM extends Xr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const _=new CM,p=t.getContextAttributes();let m=null,E=null;const M=[],T=[],C=new qe;let w=null;const A=new Wn;A.layers.enable(1),A.viewport=new $t;const L=new Wn;L.layers.enable(2),L.viewport=new $t;const S=[A,L],x=new TM;x.layers.enable(1),x.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=M[j];return ee===void 0&&(ee=new Zl,M[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=M[j];return ee===void 0&&(ee=new Zl,M[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=M[j];return ee===void 0&&(ee=new Zl,M[j]=ee),ee.getHandSpace()};function z(j){const ee=T.indexOf(j.inputSource);if(ee===-1)return;const he=M[ee];he!==void 0&&(he.update(j.inputSource,j.frame,c||a),he.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",$);for(let j=0;j<M.length;j++){const ee=T[j];ee!==null&&(T[j]=null,M[j].disconnect(ee))}P=null,U=null,_.reset(),e.setRenderTarget(m),h=null,f=null,d=null,i=null,E=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",K),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Fr(h.framebufferWidth,h.framebufferHeight,{format:si,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,he=null,le=null;p.depth&&(le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?Fs:bs,he=p.stencil?Os:Or);const Ae={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(Ae),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Fr(f.textureWidth,f.textureHeight,{format:si,type:Ii,depthTexture:new Ad(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(j){for(let ee=0;ee<j.removed.length;ee++){const he=j.removed[ee],le=T.indexOf(he);le>=0&&(T[le]=null,M[le].disconnect(he))}for(let ee=0;ee<j.added.length;ee++){const he=j.added[ee];let le=T.indexOf(he);if(le===-1){for(let Re=0;Re<M.length;Re++)if(Re>=T.length){T.push(he),le=Re;break}else if(T[Re]===null){T[Re]=he,le=Re;break}if(le===-1)break}const Ae=M[le];Ae&&Ae.connect(he)}}const W=new B,X=new B;function H(j,ee,he){W.setFromMatrixPosition(ee.matrixWorld),X.setFromMatrixPosition(he.matrixWorld);const le=W.distanceTo(X),Ae=ee.projectionMatrix.elements,Re=he.projectionMatrix.elements,We=Ae[14]/(Ae[10]-1),Ze=Ae[14]/(Ae[10]+1),I=(Ae[9]+1)/Ae[5],Ie=(Ae[9]-1)/Ae[5],Ue=(Ae[8]-1)/Ae[0],Xe=(Re[8]+1)/Re[0],ge=We*Ue,Y=We*Xe,we=le/(-Ue+Xe),Ne=we*-Ue;ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ne),j.translateZ(we),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=We+we,y=Ze+we,q=ge-Ne,te=Y+(le-Ne),ne=I*Ze/y*R,J=Ie*Ze/y*R;j.projectionMatrix.makePerspective(q,te,ne,J,R,y),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function oe(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;_.texture!==null&&(j.near=_.depthNear,j.far=_.depthFar),x.near=L.near=A.near=j.near,x.far=L.far=A.far=j.far,(P!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,U=x.far,A.near=P,A.far=U,L.near=P,L.far=U,A.updateProjectionMatrix(),L.updateProjectionMatrix(),j.updateProjectionMatrix());const ee=j.parent,he=x.cameras;oe(x,ee);for(let le=0;le<he.length;le++)oe(he[le],ee);he.length===2?H(x,A,L):x.projectionMatrix.copy(A.projectionMatrix),D(j,x,ee)};function D(j,ee,he){he===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=bo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ce=null;function ze(j,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){const he=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let le=!1;he.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let Re=0;Re<he.length;Re++){const We=he[Re];let Ze=null;if(h!==null)Ze=h.getViewport(We);else{const Ie=d.getViewSubImage(f,We);Ze=Ie.viewport,Re===0&&(e.setRenderTargetTextures(E,Ie.colorTexture,f.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(E))}let I=S[Re];I===void 0&&(I=new Wn,I.layers.enable(Re),I.viewport=new $t,S[Re]=I),I.matrix.fromArray(We.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(We.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Re===0&&(x.matrix.copy(I.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(I)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Re=d.getDepthInformation(he[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,i.renderState)}}for(let he=0;he<M.length;he++){const le=T[he],Ae=M[he];le!==null&&Ae!==void 0&&Ae.update(le,ee,c||a)}ce&&ce(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ye=new Td;Ye.setAnimationLoop(ze),this.setAnimationLoop=function(j){ce=j},this.dispose=function(){}}}const mr=new Ui,PM=new Ut;function LM(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Sd(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,E,M,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,T)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,E,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=e.get(m),M=E.envMap,T=E.envMapRotation;M&&(p.envMap.value=M,mr.copy(T),mr.x*=-1,mr.y*=-1,mr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),p.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(mr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const E=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function DM(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const T=M.program;n.uniformBlockBinding(E,T)}function c(E,M){let T=i[E.id];T===void 0&&(g(E),T=u(E),i[E.id]=T,E.addEventListener("dispose",p));const C=M.program;n.updateUBOMapping(E,C);const w=e.render.frame;s[E.id]!==w&&(f(E),s[E.id]=w)}function u(E){const M=d();E.__bindingPointIndex=M;const T=r.createBuffer(),C=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,T),T}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=i[E.id],T=E.uniforms,C=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,A=T.length;w<A;w++){const L=Array.isArray(T[w])?T[w]:[T[w]];for(let S=0,x=L.length;S<x;S++){const P=L[S];if(h(P,w,S,C)===!0){const U=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let $=0;$<z.length;$++){const W=z[$],X=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,U+K,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,K),K+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(E,M,T,C){const w=E.value,A=M+"_"+T;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const L=C[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(E){const M=E.uniforms;let T=0;const C=16;for(let A=0,L=M.length;A<L;A++){const S=Array.isArray(M[A])?M[A]:[M[A]];for(let x=0,P=S.length;x<P;x++){const U=S[x],z=Array.isArray(U.value)?U.value:[U.value];for(let K=0,$=z.length;K<$;K++){const W=z[K],X=_(W),H=T%C;H!==0&&C-H<X.boundary&&(T+=C-H),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=X.storage}}}const w=T%C;return w>0&&(T+=C-w),E.__size=T,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function p(E){const M=E.target;M.removeEventListener("dispose",p);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function m(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class IM{constructor(e={}){const{canvas:t=T_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Qi,this.toneMappingExposure=1;const M=this;let T=!1,C=0,w=0,A=null,L=-1,S=null;const x=new $t,P=new $t;let U=null;const z=new nt(0);let K=0,$=t.width,W=t.height,X=1,H=null,oe=null;const D=new $t(0,0,$,W),ce=new $t(0,0,$,W);let ze=!1;const Ye=new Ed;let j=!1,ee=!1;const he=new Ut,le=new B,Ae=new $t,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Ze(){return A===null?X:1}let I=n;function Ie(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mu}`),t.addEventListener("webglcontextlost",G,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",Q,!1),I===null){const O="webgl2";if(I=Ie(O,b),I===null)throw Ie(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ue,Xe,ge,Y,we,Ne,R,y,q,te,ne,J,Ee,re,ue,De,se,me,Pe,ke,_e,Be,He,at;function v(){Ue=new kv(I),Ue.init(),Be=new EM(I,Ue),Xe=new Uv(I,Ue,e,Be),ge=new MM(I),Y=new Gv(I),we=new oM,Ne=new yM(I,Ue,ge,we,Xe,Be,Y),R=new Ov(M),y=new zv(M),q=new $_(I),He=new Dv(I,q),te=new Hv(I,q,Y,He),ne=new Xv(I,te,q,Y),Pe=new Wv(I,Xe,Ne),De=new Nv(we),J=new sM(M,R,y,Ue,Xe,He,De),Ee=new LM(M,we),re=new lM,ue=new pM(Ue),me=new Lv(M,R,y,ge,ne,f,l),se=new xM(M,ne,Xe),at=new DM(I,Y,Xe,ge),ke=new Iv(I,Ue,Y),_e=new Vv(I,Ue,Y),Y.programs=J.programs,M.capabilities=Xe,M.extensions=Ue,M.properties=we,M.renderLists=re,M.shadowMap=se,M.state=ge,M.info=Y}v();const N=new RM(M,I);this.xr=N,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize($,W,!1))},this.getSize=function(b){return b.set($,W)},this.setSize=function(b,O,V=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,W=O,t.width=Math.floor(b*X),t.height=Math.floor(O*X),V===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set($*X,W*X).floor()},this.setDrawingBufferSize=function(b,O,V){$=b,W=O,X=V,t.width=Math.floor(b*V),t.height=Math.floor(O*V),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,O,V,k){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,O,V,k),ge.viewport(x.copy(D).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(ce)},this.setScissor=function(b,O,V,k){b.isVector4?ce.set(b.x,b.y,b.z,b.w):ce.set(b,O,V,k),ge.scissor(P.copy(ce).multiplyScalar(X).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(b){ge.setScissorTest(ze=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){oe=b},this.getClearColor=function(b){return b.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(b=!0,O=!0,V=!0){let k=0;if(b){let F=!1;if(A!==null){const ie=A.texture.format;F=ie===Au||ie===bu||ie===Tu}if(F){const ie=A.texture.type,fe=ie===Ii||ie===Or||ie===To||ie===Os||ie===yu||ie===Eu,Se=me.getClearColor(),de=me.getClearAlpha(),Me=Se.r,Le=Se.g,Fe=Se.b;fe?(h[0]=Me,h[1]=Le,h[2]=Fe,h[3]=de,I.clearBufferuiv(I.COLOR,0,h)):(g[0]=Me,g[1]=Le,g[2]=Fe,g[3]=de,I.clearBufferiv(I.COLOR,0,g))}else k|=I.COLOR_BUFFER_BIT}O&&(k|=I.DEPTH_BUFFER_BIT),V&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",G,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),re.dispose(),ue.dispose(),we.dispose(),R.dispose(),y.dispose(),ne.dispose(),He.dispose(),at.dispose(),J.dispose(),N.dispose(),N.removeEventListener("sessionstart",ve),N.removeEventListener("sessionend",Ke),ae.stop()};function G(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=Y.autoReset,O=se.enabled,V=se.autoUpdate,k=se.needsUpdate,F=se.type;v(),Y.autoReset=b,se.enabled=O,se.autoUpdate=V,se.needsUpdate=k,se.type=F}function Q(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function xe(b){const O=b.target;O.removeEventListener("dispose",xe),Oe(O)}function Oe(b){pt(b),we.remove(b)}function pt(b){const O=we.get(b).programs;O!==void 0&&(O.forEach(function(V){J.releaseProgram(V)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,V,k,F,ie){O===null&&(O=Re);const fe=F.isMesh&&F.matrixWorld.determinant()<0,Se=xt(b,O,V,k,F);ge.setMaterial(k,fe);let de=V.index,Me=1;if(k.wireframe===!0){if(de=te.getWireframeAttribute(V),de===void 0)return;Me=2}const Le=V.drawRange,Fe=V.attributes.position;let lt=Le.start*Me,mt=(Le.start+Le.count)*Me;ie!==null&&(lt=Math.max(lt,ie.start*Me),mt=Math.min(mt,(ie.start+ie.count)*Me)),de!==null?(lt=Math.max(lt,0),mt=Math.min(mt,de.count)):Fe!=null&&(lt=Math.max(lt,0),mt=Math.min(mt,Fe.count));const ct=mt-lt;if(ct<0||ct===1/0)return;He.setup(F,k,Se,V,de);let kt,rt=ke;if(de!==null&&(kt=q.get(de),rt=_e,rt.setIndex(kt)),F.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*Ze()),rt.setMode(I.LINES)):rt.setMode(I.TRIANGLES);else if(F.isLine){let be=k.linewidth;be===void 0&&(be=1),ge.setLineWidth(be*Ze()),F.isLineSegments?rt.setMode(I.LINES):F.isLineLoop?rt.setMode(I.LINE_LOOP):rt.setMode(I.LINE_STRIP)}else F.isPoints?rt.setMode(I.POINTS):F.isSprite&&rt.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)rt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))rt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const be=F._multiDrawStarts,Qt=F._multiDrawCounts,ut=F._multiDrawCount,Jn=de?q.get(de).bytesPerElement:1,qr=we.get(k).currentProgram.getUniforms();for(let Rn=0;Rn<ut;Rn++)qr.setValue(I,"_gl_DrawID",Rn),rt.render(be[Rn]/Jn,Qt[Rn])}else if(F.isInstancedMesh)rt.renderInstances(lt,ct,F.count);else if(V.isInstancedBufferGeometry){const be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Qt=Math.min(V.instanceCount,be);rt.renderInstances(lt,ct,Qt)}else rt.render(lt,ct)};function ht(b,O,V){b.transparent===!0&&b.side===wi&&b.forceSinglePass===!1?(b.side=Mn,b.needsUpdate=!0,vt(b,O,V),b.side=ir,b.needsUpdate=!0,vt(b,O,V),b.side=wi):vt(b,O,V)}this.compile=function(b,O,V=null){V===null&&(V=b),p=ue.get(V),p.init(O),E.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==V&&b.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const k=new Set;return b.traverse(function(F){const ie=F.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const Se=ie[fe];ht(Se,V,F),k.add(Se)}else ht(ie,V,F),k.add(ie)}),E.pop(),p=null,k},this.compileAsync=function(b,O,V=null){const k=this.compile(b,O,V);return new Promise(F=>{function ie(){if(k.forEach(function(fe){we.get(fe).currentProgram.isReady()&&k.delete(fe)}),k.size===0){F(b);return}setTimeout(ie,10)}Ue.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Je=null;function Te(b){Je&&Je(b)}function ve(){ae.stop()}function Ke(){ae.start()}const ae=new Td;ae.setAnimationLoop(Te),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(b){Je=b,N.setAnimationLoop(b),b===null?ae.stop():ae.start()},N.addEventListener("sessionstart",ve),N.addEventListener("sessionend",Ke),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(O),O=N.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,O,A),p=ue.get(b,E.length),p.init(O),E.push(p),he.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ye.setFromProjectionMatrix(he),ee=this.localClippingEnabled,j=De.init(this.clippingPlanes,ee),_=re.get(b,m.length),_.init(),m.push(_),N.enabled===!0&&N.isPresenting===!0){const ie=M.xr.getDepthSensingMesh();ie!==null&&Ve(ie,O,-1/0,M.sortObjects)}Ve(b,O,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(H,oe),We=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,We&&me.addToRenderList(_,b),this.info.render.frame++,j===!0&&De.beginShadows();const V=p.state.shadowsArray;se.render(V,b,O),j===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,F=_.transmissive;if(p.setupLights(),O.isArrayCamera){const ie=O.cameras;if(F.length>0)for(let fe=0,Se=ie.length;fe<Se;fe++){const de=ie[fe];Ge(k,F,b,de)}We&&me.render(b);for(let fe=0,Se=ie.length;fe<Se;fe++){const de=ie[fe];Ce(_,b,de,de.viewport)}}else F.length>0&&Ge(k,F,b,O),We&&me.render(b),Ce(_,b,O);A!==null&&(Ne.updateMultisampleRenderTarget(A),Ne.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(M,b,O),He.resetDefaultState(),L=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],j===!0&&De.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ve(b,O,V,k){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ye.intersectsSprite(b)){k&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(he);const fe=ne.update(b),Se=b.material;Se.visible&&_.push(b,fe,Se,V,Ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ye.intersectsObject(b))){const fe=ne.update(b),Se=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ae.copy(fe.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(he)),Array.isArray(Se)){const de=fe.groups;for(let Me=0,Le=de.length;Me<Le;Me++){const Fe=de[Me],lt=Se[Fe.materialIndex];lt&&lt.visible&&_.push(b,fe,lt,V,Ae.z,Fe)}}else Se.visible&&_.push(b,fe,Se,V,Ae.z,null)}}const ie=b.children;for(let fe=0,Se=ie.length;fe<Se;fe++)Ve(ie[fe],O,V,k)}function Ce(b,O,V,k){const F=b.opaque,ie=b.transmissive,fe=b.transparent;p.setupLightsView(V),j===!0&&De.setGlobalState(M.clippingPlanes,V),k&&ge.viewport(x.copy(k)),F.length>0&&bt(F,O,V),ie.length>0&&bt(ie,O,V),fe.length>0&&bt(fe,O,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ge(b,O,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Fr(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?No:Ii,minFilter:Ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const ie=p.state.transmissionRenderTarget[k.id],fe=k.viewport||x;ie.setSize(fe.z,fe.w);const Se=M.getRenderTarget();M.setRenderTarget(ie),M.getClearColor(z),K=M.getClearAlpha(),K<1&&M.setClearColor(16777215,.5),We?me.render(V):M.clear();const de=M.toneMapping;M.toneMapping=Qi;const Me=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),j===!0&&De.setGlobalState(M.clippingPlanes,k),bt(b,V,k),Ne.updateMultisampleRenderTarget(ie),Ne.updateRenderTargetMipmap(ie),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Fe=0,lt=O.length;Fe<lt;Fe++){const mt=O[Fe],ct=mt.object,kt=mt.geometry,rt=mt.material,be=mt.group;if(rt.side===wi&&ct.layers.test(k.layers)){const Qt=rt.side;rt.side=Mn,rt.needsUpdate=!0,Qe(ct,V,k,kt,rt,be),rt.side=Qt,rt.needsUpdate=!0,Le=!0}}Le===!0&&(Ne.updateMultisampleRenderTarget(ie),Ne.updateRenderTargetMipmap(ie))}M.setRenderTarget(Se),M.setClearColor(z,K),Me!==void 0&&(k.viewport=Me),M.toneMapping=de}function bt(b,O,V){const k=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ie=b.length;F<ie;F++){const fe=b[F],Se=fe.object,de=fe.geometry,Me=k===null?fe.material:k,Le=fe.group;Se.layers.test(V.layers)&&Qe(Se,O,V,de,Me,Le)}}function Qe(b,O,V,k,F,ie){b.onBeforeRender(M,O,V,k,F,ie),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.transparent===!0&&F.side===wi&&F.forceSinglePass===!1?(F.side=Mn,F.needsUpdate=!0,M.renderBufferDirect(V,O,k,F,b,ie),F.side=ir,F.needsUpdate=!0,M.renderBufferDirect(V,O,k,F,b,ie),F.side=wi):M.renderBufferDirect(V,O,k,F,b,ie),b.onAfterRender(M,O,V,k,F,ie)}function vt(b,O,V){O.isScene!==!0&&(O=Re);const k=we.get(b),F=p.state.lights,ie=p.state.shadowsArray,fe=F.state.version,Se=J.getParameters(b,F.state,ie,O,V),de=J.getProgramCacheKey(Se);let Me=k.programs;k.environment=b.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(b.isMeshStandardMaterial?y:R).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Me===void 0&&(b.addEventListener("dispose",xe),Me=new Map,k.programs=Me);let Le=Me.get(de);if(Le!==void 0){if(k.currentProgram===Le&&k.lightsStateVersion===fe)return St(b,Se),Le}else Se.uniforms=J.getUniforms(b),b.onBeforeCompile(Se,M),Le=J.acquireProgram(Se,de),Me.set(de,Le),k.uniforms=Se.uniforms;const Fe=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=De.uniform),St(b,Se),k.needsLights=Cn(b),k.lightsStateVersion=fe,k.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Le,k.uniformsList=null,Le}function zt(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Ia.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function St(b,O){const V=we.get(b);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function xt(b,O,V,k,F){O.isScene!==!0&&(O=Re),Ne.resetTextureUnits();const ie=O.fog,fe=k.isMeshStandardMaterial?O.environment:null,Se=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:lr,de=(k.isMeshStandardMaterial?y:R).get(k.envMap||fe),Me=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Fe=!!V.morphAttributes.position,lt=!!V.morphAttributes.normal,mt=!!V.morphAttributes.color;let ct=Qi;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ct=M.toneMapping);const kt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,rt=kt!==void 0?kt.length:0,be=we.get(k),Qt=p.state.lights;if(j===!0&&(ee===!0||b!==S)){const Hn=b===S&&k.id===L;De.setState(k,b,Hn)}let ut=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Qt.state.version||be.outputColorSpace!==Se||F.isBatchedMesh&&be.batching===!1||!F.isBatchedMesh&&be.batching===!0||F.isBatchedMesh&&be.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&be.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&be.instancing===!1||!F.isInstancedMesh&&be.instancing===!0||F.isSkinnedMesh&&be.skinning===!1||!F.isSkinnedMesh&&be.skinning===!0||F.isInstancedMesh&&be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&be.instancingMorph===!1&&F.morphTexture!==null||be.envMap!==de||k.fog===!0&&be.fog!==ie||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==De.numPlanes||be.numIntersection!==De.numIntersection)||be.vertexAlphas!==Me||be.vertexTangents!==Le||be.morphTargets!==Fe||be.morphNormals!==lt||be.morphColors!==mt||be.toneMapping!==ct||be.morphTargetsCount!==rt)&&(ut=!0):(ut=!0,be.__version=k.version);let Jn=be.currentProgram;ut===!0&&(Jn=vt(k,O,F));let qr=!1,Rn=!1,Ml=!1;const Nt=Jn.getUniforms(),Fi=be.uniforms;if(ge.useProgram(Jn.program)&&(qr=!0,Rn=!0,Ml=!0),k.id!==L&&(L=k.id,Rn=!0),qr||S!==b){Nt.setValue(I,"projectionMatrix",b.projectionMatrix),Nt.setValue(I,"viewMatrix",b.matrixWorldInverse);const Hn=Nt.map.cameraPosition;Hn!==void 0&&Hn.setValue(I,le.setFromMatrixPosition(b.matrixWorld)),Xe.logarithmicDepthBuffer&&Nt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Nt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Rn=!0,Ml=!0)}if(F.isSkinnedMesh){Nt.setOptional(I,F,"bindMatrix"),Nt.setOptional(I,F,"bindMatrixInverse");const Hn=F.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),Nt.setValue(I,"boneTexture",Hn.boneTexture,Ne))}F.isBatchedMesh&&(Nt.setOptional(I,F,"batchingTexture"),Nt.setValue(I,"batchingTexture",F._matricesTexture,Ne),Nt.setOptional(I,F,"batchingIdTexture"),Nt.setValue(I,"batchingIdTexture",F._indirectTexture,Ne),Nt.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Nt.setValue(I,"batchingColorTexture",F._colorsTexture,Ne));const Sl=V.morphAttributes;if((Sl.position!==void 0||Sl.normal!==void 0||Sl.color!==void 0)&&Pe.update(F,V,Jn),(Rn||be.receiveShadow!==F.receiveShadow)&&(be.receiveShadow=F.receiveShadow,Nt.setValue(I,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Fi.envMap.value=de,Fi.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&O.environment!==null&&(Fi.envMapIntensity.value=O.environmentIntensity),Rn&&(Nt.setValue(I,"toneMappingExposure",M.toneMappingExposure),be.needsLights&&ft(Fi,Ml),ie&&k.fog===!0&&Ee.refreshFogUniforms(Fi,ie),Ee.refreshMaterialUniforms(Fi,k,X,W,p.state.transmissionRenderTarget[b.id]),Ia.upload(I,zt(be),Fi,Ne)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ia.upload(I,zt(be),Fi,Ne),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Nt.setValue(I,"center",F.center),Nt.setValue(I,"modelViewMatrix",F.modelViewMatrix),Nt.setValue(I,"normalMatrix",F.normalMatrix),Nt.setValue(I,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Hn=k.uniformsGroups;for(let yl=0,hm=Hn.length;yl<hm;yl++){const ah=Hn[yl];at.update(ah,Jn),at.bind(ah,Jn)}}return Jn}function ft(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Cn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,O,V){we.get(b.texture).__webglTexture=O,we.get(b.depthTexture).__webglTexture=V;const k=we.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const V=we.get(b);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,V=0){A=b,C=O,w=V;let k=!0,F=null,ie=!1,fe=!1;if(b){const de=we.get(b);de.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(I.FRAMEBUFFER,null),k=!1):de.__webglFramebuffer===void 0?Ne.setupRenderTarget(b):de.__hasExternalTextures&&Ne.rebindTextures(b,we.get(b.texture).__webglTexture,we.get(b.depthTexture).__webglTexture);const Me=b.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(fe=!0);const Le=we.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?F=Le[O][V]:F=Le[O],ie=!0):b.samples>0&&Ne.useMultisampledRTT(b)===!1?F=we.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[V]:F=Le,x.copy(b.viewport),P.copy(b.scissor),U=b.scissorTest}else x.copy(D).multiplyScalar(X).floor(),P.copy(ce).multiplyScalar(X).floor(),U=ze;if(ge.bindFramebuffer(I.FRAMEBUFFER,F)&&k&&ge.drawBuffers(b,F),ge.viewport(x),ge.scissor(P),ge.setScissorTest(U),ie){const de=we.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,de.__webglTexture,V)}else if(fe){const de=we.get(b.texture),Me=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.__webglTexture,V||0,Me)}L=-1},this.readRenderTargetPixels=function(b,O,V,k,F,ie,fe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){ge.bindFramebuffer(I.FRAMEBUFFER,Se);try{const de=b.texture,Me=de.format,Le=de.type;if(!Xe.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-k&&V>=0&&V<=b.height-F&&I.readPixels(O,V,k,F,Be.convert(Me),Be.convert(Le),ie)}finally{const de=A!==null?we.get(A).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(b,O,V,k,F,ie,fe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=we.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&fe!==void 0&&(Se=Se[fe]),Se){ge.bindFramebuffer(I.FRAMEBUFFER,Se);try{const de=b.texture,Me=de.format,Le=de.type;if(!Xe.textureFormatReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-k&&V>=0&&V<=b.height-F){const Fe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Fe),I.bufferData(I.PIXEL_PACK_BUFFER,ie.byteLength,I.STREAM_READ),I.readPixels(O,V,k,F,Be.convert(Me),Be.convert(Le),0),I.flush();const lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await b_(I,lt,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Fe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ie)}finally{I.deleteBuffer(Fe),I.deleteSync(lt)}return ie}}finally{const de=A!==null?we.get(A).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,de)}}},this.copyFramebufferToTexture=function(b,O=null,V=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-V),F=Math.floor(b.image.width*k),ie=Math.floor(b.image.height*k),fe=O!==null?O.x:0,Se=O!==null?O.y:0;Ne.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,fe,Se,F,ie),ge.unbindTexture()},this.copyTextureToTexture=function(b,O,V=null,k=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],O=arguments[2],F=arguments[3]||0,V=null);let ie,fe,Se,de,Me,Le;V!==null?(ie=V.max.x-V.min.x,fe=V.max.y-V.min.y,Se=V.min.x,de=V.min.y):(ie=b.image.width,fe=b.image.height,Se=0,de=0),k!==null?(Me=k.x,Le=k.y):(Me=0,Le=0);const Fe=Be.convert(O.format),lt=Be.convert(O.type);Ne.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const mt=I.getParameter(I.UNPACK_ROW_LENGTH),ct=I.getParameter(I.UNPACK_IMAGE_HEIGHT),kt=I.getParameter(I.UNPACK_SKIP_PIXELS),rt=I.getParameter(I.UNPACK_SKIP_ROWS),be=I.getParameter(I.UNPACK_SKIP_IMAGES),Qt=b.isCompressedTexture?b.mipmaps[F]:b.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Qt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Se),I.pixelStorei(I.UNPACK_SKIP_ROWS,de),b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Me,Le,ie,fe,Fe,lt,Qt.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Me,Le,Qt.width,Qt.height,Fe,Qt.data):I.texSubImage2D(I.TEXTURE_2D,F,Me,Le,ie,fe,Fe,lt,Qt),I.pixelStorei(I.UNPACK_ROW_LENGTH,mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct),I.pixelStorei(I.UNPACK_SKIP_PIXELS,kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,be),F===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(b,O,V=null,k=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,k=arguments[1]||null,b=arguments[2],O=arguments[3],F=arguments[4]||0);let ie,fe,Se,de,Me,Le,Fe,lt,mt;const ct=b.isCompressedTexture?b.mipmaps[F]:b.image;V!==null?(ie=V.max.x-V.min.x,fe=V.max.y-V.min.y,Se=V.max.z-V.min.z,de=V.min.x,Me=V.min.y,Le=V.min.z):(ie=ct.width,fe=ct.height,Se=ct.depth,de=0,Me=0,Le=0),k!==null?(Fe=k.x,lt=k.y,mt=k.z):(Fe=0,lt=0,mt=0);const kt=Be.convert(O.format),rt=Be.convert(O.type);let be;if(O.isData3DTexture)Ne.setTexture3D(O,0),be=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Ne.setTexture2DArray(O,0),be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Qt=I.getParameter(I.UNPACK_ROW_LENGTH),ut=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Jn=I.getParameter(I.UNPACK_SKIP_PIXELS),qr=I.getParameter(I.UNPACK_SKIP_ROWS),Rn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,de),I.pixelStorei(I.UNPACK_SKIP_ROWS,Me),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Le),b.isDataTexture||b.isData3DTexture?I.texSubImage3D(be,F,Fe,lt,mt,ie,fe,Se,kt,rt,ct.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(be,F,Fe,lt,mt,ie,fe,Se,kt,ct.data):I.texSubImage3D(be,F,Fe,lt,mt,ie,fe,Se,kt,rt,ct),I.pixelStorei(I.UNPACK_ROW_LENGTH,Qt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jn),I.pixelStorei(I.UNPACK_SKIP_ROWS,qr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rn),F===0&&O.generateMipmaps&&I.generateMipmap(be),ge.unbindTexture()},this.initRenderTarget=function(b){we.get(b).__webglFramebuffer===void 0&&Ne.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ne.setTextureCube(b,0):b.isData3DTexture?Ne.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ne.setTexture2DArray(b,0):Ne.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,ge.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wu?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===hl?"display-p3":"srgb"}}class UM extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zo extends Fo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $a=new B,ja=new B,af=new Ut,js=new Ru,ua=new fl,Kl=new B,lf=new B;class Ld extends yn{constructor(e=new kn,t=new zo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)$a.fromBufferAttribute(t,i-1),ja.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$a.distanceTo(ja);e.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(i),ua.radius+=s,e.ray.intersectsSphere(ua)===!1)return;af.copy(i).invert(),js.copy(e.ray).applyMatrix4(af);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,p=g-1;_<p;_+=c){const m=u.getX(_),E=u.getX(_+1),M=ha(this,e,js,l,m,E);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(h),m=ha(this,e,js,l,_,p);m&&t.push(m)}}else{const h=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=h,p=g-1;_<p;_+=c){const m=ha(this,e,js,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=ha(this,e,js,l,g-1,h);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ha(r,e,t,n,i,s){const a=r.geometry.attributes.position;if($a.fromBufferAttribute(a,i),ja.fromBufferAttribute(a,s),t.distanceSqToSegment($a,ja,Kl,lf)>n)return;Kl.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Kl);if(!(l<e.near||l>e.far))return{distance:l,point:lf.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const cf=new B,uf=new B;class Iu extends Ld{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)cf.fromBufferAttribute(t,i),uf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cf.distanceTo(uf);e.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class NM{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],f=n[i+1]-u,h=(a-u)/f;return(i+h)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new qe:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new B,i=[],s=[],a=[],o=new B,l=new Ut;for(let h=0;h<=e;h++){const g=h/e;i[h]=this.getTangentAt(g,new B)}s[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(i[h-1],i[h]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Zt(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,g))}a[h].crossVectors(i[h],s[h])}if(t===!0){let h=Math.acos(Zt(s[0].dot(s[e]),-1,1));h/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(h=-h);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],h*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Uu(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,h*=u,i(a,o,f,h)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const fa=new B,$l=new Uu,jl=new Uu,Jl=new Uu;class OM extends NM{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new B){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(fa.subVectors(i[0],i[1]).add(i[0]),c=fa);const d=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(fa.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=fa),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),h),_=Math.pow(d.distanceToSquared(f),h),p=Math.pow(f.distanceToSquared(u),h);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),$l.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,_,p),jl.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,_,p),Jl.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&($l.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),jl.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Jl.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set($l.calc(l),jl.calc(l),Jl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Nu extends kn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new B,d=new B,f=new B;for(let h=0;h<=n;h++)for(let g=0;g<=i;g++){const _=g/i*s,p=h/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=i;g++){const _=(i+1)*h+g-1,p=(i+1)*(h-1)+g-1,m=(i+1)*(h-1)+g,E=(i+1)*h+g;a.push(_,p,E),a.push(p,m,E)}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class FM extends Iu{constructor(e=10,t=10,n=4473924,i=8947848){n=new nt(n),i=new nt(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,h=0,g=-o;f<=t;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=f===s?n:i;_.toArray(c,h),h+=3,_.toArray(c,h),h+=3,_.toArray(c,h),h+=3,_.toArray(c,h),h+=3}const u=new kn;u.setAttribute("position",new jt(l,3)),u.setAttribute("color",new jt(c,3));const d=new zo({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const da=new B,Rt=new Lu;class BM extends Iu{constructor(e){const t=new kn,n=new zo({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(g,_){l(g),l(_)}function l(g){i.push(0,0,0),s.push(0,0,0),a[g]===void 0&&(a[g]=[]),a[g].push(i.length/3-1)}t.setAttribute("position",new jt(i,3)),t.setAttribute("color",new jt(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new nt(16755200),u=new nt(16711680),d=new nt(43775),f=new nt(16777215),h=new nt(3355443);this.setColors(c,u,d,f,h)}setColors(e,t,n,i,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Rt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Lt("c",t,e,Rt,0,0,-1),Lt("t",t,e,Rt,0,0,1),Lt("n1",t,e,Rt,-n,-i,-1),Lt("n2",t,e,Rt,n,-i,-1),Lt("n3",t,e,Rt,-n,i,-1),Lt("n4",t,e,Rt,n,i,-1),Lt("f1",t,e,Rt,-n,-i,1),Lt("f2",t,e,Rt,n,-i,1),Lt("f3",t,e,Rt,-n,i,1),Lt("f4",t,e,Rt,n,i,1),Lt("u1",t,e,Rt,n*.7,i*1.1,-1),Lt("u2",t,e,Rt,-n*.7,i*1.1,-1),Lt("u3",t,e,Rt,0,i*2,-1),Lt("cf1",t,e,Rt,-n,0,1),Lt("cf2",t,e,Rt,n,0,1),Lt("cf3",t,e,Rt,0,-i,1),Lt("cf4",t,e,Rt,0,i,1),Lt("cn1",t,e,Rt,-n,0,-1),Lt("cn2",t,e,Rt,n,0,-1),Lt("cn3",t,e,Rt,0,-i,-1),Lt("cn4",t,e,Rt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Lt(r,e,t,n,i,s,a){da.set(i,s,a).unproject(n);const o=e[r];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],da.x,da.y,da.z)}}class zM extends Iu{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new kn;i.setAttribute("position",new jt(t,3)),i.setAttribute("color",new jt(n,3));const s=new zo({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new nt,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mu);var Ou={exports:{}},ws=typeof Reflect=="object"?Reflect:null,ff=ws&&typeof ws.apply=="function"?ws.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},Ua;ws&&typeof ws.ownKeys=="function"?Ua=ws.ownKeys:Object.getOwnPropertySymbols?Ua=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Ua=function(e){return Object.getOwnPropertyNames(e)};function kM(r){console&&console.warn&&console.warn(r)}var Dd=Number.isNaN||function(e){return e!==e};function _t(){_t.init.call(this)}Ou.exports=_t;Ou.exports.once=WM;_t.EventEmitter=_t;_t.prototype._events=void 0;_t.prototype._eventsCount=0;_t.prototype._maxListeners=void 0;var df=10;function ml(r){if(typeof r!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)}Object.defineProperty(_t,"defaultMaxListeners",{enumerable:!0,get:function(){return df},set:function(r){if(typeof r!="number"||r<0||Dd(r))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+r+".");df=r}});_t.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};_t.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Dd(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Id(r){return r._maxListeners===void 0?_t.defaultMaxListeners:r._maxListeners}_t.prototype.getMaxListeners=function(){return Id(this)};_t.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e==="error",s=this._events;if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var o=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw o.context=a,o}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")ff(l,this,t);else for(var c=l.length,u=Bd(l,c),n=0;n<c;++n)ff(u[n],this,t);return!0};function Ud(r,e,t,n){var i,s,a;if(ml(t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=0):(s.newListener!==void 0&&(r.emit("newListener",e,t.listener?t.listener:t),s=r._events),a=s[e]),a===void 0)a=s[e]=t,++r._eventsCount;else if(typeof a=="function"?a=s[e]=n?[t,a]:[a,t]:n?a.unshift(t):a.push(t),i=Id(r),i>0&&a.length>i&&!a.warned){a.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=r,o.type=e,o.count=a.length,kM(o)}return r}_t.prototype.addListener=function(e,t){return Ud(this,e,t,!1)};_t.prototype.on=_t.prototype.addListener;_t.prototype.prependListener=function(e,t){return Ud(this,e,t,!0)};function HM(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Nd(r,e,t){var n={fired:!1,wrapFn:void 0,target:r,type:e,listener:t},i=HM.bind(n);return i.listener=t,n.wrapFn=i,i}_t.prototype.once=function(e,t){return ml(t),this.on(e,Nd(this,e,t)),this};_t.prototype.prependOnceListener=function(e,t){return ml(t),this.prependListener(e,Nd(this,e,t)),this};_t.prototype.removeListener=function(e,t){var n,i,s,a,o;if(ml(t),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){o=n[a].listener,s=a;break}if(s<0)return this;s===0?n.shift():VM(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,o||t)}return this};_t.prototype.off=_t.prototype.removeListener;_t.prototype.removeAllListeners=function(e){var t,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var s=Object.keys(n),a;for(i=0;i<s.length;++i)a=s[i],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this};function Od(r,e,t){var n=r._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?GM(i):Bd(i,i.length)}_t.prototype.listeners=function(e){return Od(this,e,!0)};_t.prototype.rawListeners=function(e){return Od(this,e,!1)};_t.listenerCount=function(r,e){return typeof r.listenerCount=="function"?r.listenerCount(e):Fd.call(r,e)};_t.prototype.listenerCount=Fd;function Fd(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}_t.prototype.eventNames=function(){return this._eventsCount>0?Ua(this._events):[]};function Bd(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];return t}function VM(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.pop()}function GM(r){for(var e=new Array(r.length),t=0;t<e.length;++t)e[t]=r[t].listener||r[t];return e}function WM(r,e){return new Promise(function(t,n){function i(a){r.removeListener(e,s),n(a)}function s(){typeof r.removeListener=="function"&&r.removeListener("error",i),t([].slice.call(arguments))}zd(r,e,s,{once:!0}),e!=="error"&&XM(r,i,{once:!0})})}function XM(r,e,t){typeof r.on=="function"&&zd(r,"error",e,t)}function zd(r,e,t,n){if(typeof r.on=="function")n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(e,function i(s){n.once&&r.removeEventListener(e,i),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof r)}var kd=Ou.exports;class YM extends kd.EventEmitter{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.frustrum=5,window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.emit("resize")})}}class qM extends kd.EventEmitter{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.update()}update(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.emit("update"),window.requestAnimationFrame(()=>this.update())}}const pf={type:"change"},Ql={type:"start"},mf={type:"end"},pa=new Ru,_f=new Xi,ZM=Math.cos(70*E_.DEG2RAD);class KM extends Xr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:Kr.ROTATE,TWO:Kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",ue),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ue),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(pf),n.update(),s=i.NONE},this.update=function(){const v=new B,N=new Br().setFromUnitVectors(e.up,new B(0,1,0)),G=N.clone().invert(),Z=new B,Q=new Br,xe=new B,Oe=2*Math.PI;return function(ht=null){const Je=n.object.position;v.copy(Je).sub(n.target),v.applyQuaternion(N),o.setFromVector3(v),n.autoRotate&&s===i.NONE&&U(x(ht)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Te=n.minAzimuthAngle,ve=n.maxAzimuthAngle;isFinite(Te)&&isFinite(ve)&&(Te<-Math.PI?Te+=Oe:Te>Math.PI&&(Te-=Oe),ve<-Math.PI?ve+=Oe:ve>Math.PI&&(ve-=Oe),Te<=ve?o.theta=Math.max(Te,Math.min(ve,o.theta)):o.theta=o.theta>(Te+ve)/2?Math.max(Te,o.theta):Math.min(ve,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ke=!1;if(n.zoomToCursor&&w||n.object.isOrthographicCamera)o.radius=D(o.radius);else{const ae=o.radius;o.radius=D(o.radius*c),Ke=ae!=o.radius}if(v.setFromSpherical(o),v.applyQuaternion(G),Je.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&w){let ae=null;if(n.object.isPerspectiveCamera){const Ve=v.length();ae=D(Ve*c);const Ce=Ve-ae;n.object.position.addScaledVector(T,Ce),n.object.updateMatrixWorld(),Ke=!!Ce}else if(n.object.isOrthographicCamera){const Ve=new B(C.x,C.y,0);Ve.unproject(n.object);const Ce=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ke=Ce!==n.object.zoom;const Ge=new B(C.x,C.y,0);Ge.unproject(n.object),n.object.position.sub(Ge).add(Ve),n.object.updateMatrixWorld(),ae=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ae!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ae).add(n.object.position):(pa.origin.copy(n.object.position),pa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(pa.direction))<ZM?e.lookAt(n.target):(_f.setFromNormalAndCoplanarPoint(n.object.up,n.target),pa.intersectPlane(_f,n.target))))}else if(n.object.isOrthographicCamera){const ae=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),ae!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ke=!0)}return c=1,w=!1,Ke||Z.distanceToSquared(n.object.position)>a||8*(1-Q.dot(n.object.quaternion))>a||xe.distanceToSquared(n.target)>a?(n.dispatchEvent(pf),Z.copy(n.object.position),Q.copy(n.object.quaternion),xe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",me),n.domElement.removeEventListener("pointerdown",Ne),n.domElement.removeEventListener("pointercancel",y),n.domElement.removeEventListener("wheel",ne),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",y),n.domElement.getRootNode().removeEventListener("keydown",Ee,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ue),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new hf,l=new hf;let c=1;const u=new B,d=new qe,f=new qe,h=new qe,g=new qe,_=new qe,p=new qe,m=new qe,E=new qe,M=new qe,T=new B,C=new qe;let w=!1;const A=[],L={};let S=!1;function x(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function P(v){const N=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*N)}function U(v){l.theta-=v}function z(v){l.phi-=v}const K=function(){const v=new B;return function(G,Z){v.setFromMatrixColumn(Z,0),v.multiplyScalar(-G),u.add(v)}}(),$=function(){const v=new B;return function(G,Z){n.screenSpacePanning===!0?v.setFromMatrixColumn(Z,1):(v.setFromMatrixColumn(Z,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(G),u.add(v)}}(),W=function(){const v=new B;return function(G,Z){const Q=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;v.copy(xe).sub(n.target);let Oe=v.length();Oe*=Math.tan(n.object.fov/2*Math.PI/180),K(2*G*Oe/Q.clientHeight,n.object.matrix),$(2*Z*Oe/Q.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(G*(n.object.right-n.object.left)/n.object.zoom/Q.clientWidth,n.object.matrix),$(Z*(n.object.top-n.object.bottom)/n.object.zoom/Q.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function oe(v,N){if(!n.zoomToCursor)return;w=!0;const G=n.domElement.getBoundingClientRect(),Z=v-G.left,Q=N-G.top,xe=G.width,Oe=G.height;C.x=Z/xe*2-1,C.y=-(Q/Oe)*2+1,T.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function D(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function ce(v){d.set(v.clientX,v.clientY)}function ze(v){oe(v.clientX,v.clientX),m.set(v.clientX,v.clientY)}function Ye(v){g.set(v.clientX,v.clientY)}function j(v){f.set(v.clientX,v.clientY),h.subVectors(f,d).multiplyScalar(n.rotateSpeed);const N=n.domElement;U(2*Math.PI*h.x/N.clientHeight),z(2*Math.PI*h.y/N.clientHeight),d.copy(f),n.update()}function ee(v){E.set(v.clientX,v.clientY),M.subVectors(E,m),M.y>0?X(P(M.y)):M.y<0&&H(P(M.y)),m.copy(E),n.update()}function he(v){_.set(v.clientX,v.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_),n.update()}function le(v){oe(v.clientX,v.clientY),v.deltaY<0?H(P(v.deltaY)):v.deltaY>0&&X(P(v.deltaY)),n.update()}function Ae(v){let N=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),N=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),N=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),N=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),N=!0;break}N&&(v.preventDefault(),n.update())}function Re(v){if(A.length===1)d.set(v.pageX,v.pageY);else{const N=He(v),G=.5*(v.pageX+N.x),Z=.5*(v.pageY+N.y);d.set(G,Z)}}function We(v){if(A.length===1)g.set(v.pageX,v.pageY);else{const N=He(v),G=.5*(v.pageX+N.x),Z=.5*(v.pageY+N.y);g.set(G,Z)}}function Ze(v){const N=He(v),G=v.pageX-N.x,Z=v.pageY-N.y,Q=Math.sqrt(G*G+Z*Z);m.set(0,Q)}function I(v){n.enableZoom&&Ze(v),n.enablePan&&We(v)}function Ie(v){n.enableZoom&&Ze(v),n.enableRotate&&Re(v)}function Ue(v){if(A.length==1)f.set(v.pageX,v.pageY);else{const G=He(v),Z=.5*(v.pageX+G.x),Q=.5*(v.pageY+G.y);f.set(Z,Q)}h.subVectors(f,d).multiplyScalar(n.rotateSpeed);const N=n.domElement;U(2*Math.PI*h.x/N.clientHeight),z(2*Math.PI*h.y/N.clientHeight),d.copy(f)}function Xe(v){if(A.length===1)_.set(v.pageX,v.pageY);else{const N=He(v),G=.5*(v.pageX+N.x),Z=.5*(v.pageY+N.y);_.set(G,Z)}p.subVectors(_,g).multiplyScalar(n.panSpeed),W(p.x,p.y),g.copy(_)}function ge(v){const N=He(v),G=v.pageX-N.x,Z=v.pageY-N.y,Q=Math.sqrt(G*G+Z*Z);E.set(0,Q),M.set(0,Math.pow(E.y/m.y,n.zoomSpeed)),X(M.y),m.copy(E);const xe=(v.pageX+N.x)*.5,Oe=(v.pageY+N.y)*.5;oe(xe,Oe)}function Y(v){n.enableZoom&&ge(v),n.enablePan&&Xe(v)}function we(v){n.enableZoom&&ge(v),n.enableRotate&&Ue(v)}function Ne(v){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",y)),!_e(v)&&(Pe(v),v.pointerType==="touch"?De(v):q(v)))}function R(v){n.enabled!==!1&&(v.pointerType==="touch"?se(v):te(v))}function y(v){switch(ke(v),A.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",y),n.dispatchEvent(mf),s=i.NONE;break;case 1:const N=A[0],G=L[N];De({pointerId:N,pageX:G.x,pageY:G.y});break}}function q(v){let N;switch(v.button){case 0:N=n.mouseButtons.LEFT;break;case 1:N=n.mouseButtons.MIDDLE;break;case 2:N=n.mouseButtons.RIGHT;break;default:N=-1}switch(N){case Zr.DOLLY:if(n.enableZoom===!1)return;ze(v),s=i.DOLLY;break;case Zr.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;Ye(v),s=i.PAN}else{if(n.enableRotate===!1)return;ce(v),s=i.ROTATE}break;case Zr.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;ce(v),s=i.ROTATE}else{if(n.enablePan===!1)return;Ye(v),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ql)}function te(v){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;j(v);break;case i.DOLLY:if(n.enableZoom===!1)return;ee(v);break;case i.PAN:if(n.enablePan===!1)return;he(v);break}}function ne(v){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(v.preventDefault(),n.dispatchEvent(Ql),le(J(v)),n.dispatchEvent(mf))}function J(v){const N=v.deltaMode,G={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(N){case 1:G.deltaY*=16;break;case 2:G.deltaY*=100;break}return v.ctrlKey&&!S&&(G.deltaY*=10),G}function Ee(v){v.key==="Control"&&(S=!0,n.domElement.getRootNode().addEventListener("keyup",re,{passive:!0,capture:!0}))}function re(v){v.key==="Control"&&(S=!1,n.domElement.getRootNode().removeEventListener("keyup",re,{passive:!0,capture:!0}))}function ue(v){n.enabled===!1||n.enablePan===!1||Ae(v)}function De(v){switch(Be(v),A.length){case 1:switch(n.touches.ONE){case Kr.ROTATE:if(n.enableRotate===!1)return;Re(v),s=i.TOUCH_ROTATE;break;case Kr.PAN:if(n.enablePan===!1)return;We(v),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Kr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;I(v),s=i.TOUCH_DOLLY_PAN;break;case Kr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ie(v),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ql)}function se(v){switch(Be(v),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ue(v),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Xe(v),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Y(v),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(v),n.update();break;default:s=i.NONE}}function me(v){n.enabled!==!1&&v.preventDefault()}function Pe(v){A.push(v.pointerId)}function ke(v){delete L[v.pointerId];for(let N=0;N<A.length;N++)if(A[N]==v.pointerId){A.splice(N,1);return}}function _e(v){for(let N=0;N<A.length;N++)if(A[N]==v.pointerId)return!0;return!1}function Be(v){let N=L[v.pointerId];N===void 0&&(N=new qe,L[v.pointerId]=N),N.set(v.pageX,v.pageY)}function He(v){const N=v.pointerId===A[0]?A[1]:A[0];return L[N]}n.domElement.addEventListener("contextmenu",me),n.domElement.addEventListener("pointerdown",Ne),n.domElement.addEventListener("pointercancel",y),n.domElement.addEventListener("wheel",ne,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ee,{passive:!0,capture:!0}),this.update()}}class $M{constructor(){this.experience=new Wr,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.createPerspectiveCamera(),this.createOrthographicCamera(),this.setOrbitControls()}createPerspectiveCamera(){this.perspectiveCamera=new Wn(35,this.sizes.aspect,.1,100),this.scene.add(this.perspectiveCamera),this.perspectiveCamera.position.z=55,this.perspectiveCamera.position.x=17,this.perspectiveCamera.position.y=29}createOrthographicCamera(){this.frustrum=5,this.orthographicCamera=new bd(-this.sizes.aspect*this.sizes.frustrum/2,this.sizes.aspect*this.sizes.frustrum/2,this.sizes.frustrum/2,-this.sizes.frustrum/2,-100,100),this.scene.add(this.orthographicCamera)}createHelper(){this.helper=new BM(this.orthographicCamera),this.scene.add(this.helper);const e=20,t=20,n=new FM(e,t);this.scene.add(n);const i=new zM(e,t);this.scene.add(i)}setOrbitControls(){this.controls=new KM(this.perspectiveCamera,this.canvas),this.controls.enableDamping=!0,this.controls.enableZoom=!1}resize(){this.perspectiveCamera.aspect=this.sizes.aspect,this.perspectiveCamera.updateProjectionMatrix(),this.orthographicCamera.left=-this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.right=this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.top=this.sizes.frustrum/2,this.orthographicCamera.bottom=-this.sizes.frustrum/2,this.orthographicCamera.updateProjectionMatrix()}update(){this.controls.update()}updateHelper(){this.helper.matrixWorldNeedsUpdate=!0,this.helper.update(),this.helper.position.copy(this.orthographicCamera.position),this.helper.rotation.copy(this.orthographicCamera.rotation)}}class jM{constructor(){this.experience=new Wr,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,console.log(this.camera,this.camera.perspectiveCamera),this.setRenderer()}setRenderer(){this.renderer=new IM({canvas:this.canvas,antialias:!0}),this.renderer.physicallyCorrectLights=!0,this.renderer.outputEncoding=void 0,this.renderer.toneMapping=ed,this.renderer.toneMappingExposure=1.75,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Jf,this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}resize(){this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}update(){this.renderer.setViewport(0,0,this.sizes.width,this.sizes.height),this.renderer.render(this.scene,this.camera.orthographicCamera)}updatePerspectiveCamera(){this.renderer.setScissorTest(!0),this.renderer.setViewport(this.sizes.width-this.sizes.width/3,this.sizes.height-this.sizes.height/3,this.sizes.width/3,this.sizes.height/3),this.renderer.setScissor(this.sizes.width-this.sizes.width/3,this.sizes.height-this.sizes.height/3,this.sizes.width/3,this.sizes.height/3),this.renderer.render(this.scene,this.camera.perspectiveCamera),this.renderer.setScissorTest(!1)}}function bi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Bn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zs={duration:.5,overwrite:!1,delay:0},Fu,an,Tt,Zn=1e8,Mt=1/Zn,Kc=Math.PI*2,JM=Kc/4,QM=0,Vd=Math.sqrt,eS=Math.cos,tS=Math.sin,Jt=function(e){return typeof e=="string"},Pt=function(e){return typeof e=="function"},Ni=function(e){return typeof e=="number"},Bu=function(e){return typeof e>"u"},vi=function(e){return typeof e=="object"},En=function(e){return e!==!1},zu=function(){return typeof window<"u"},ma=function(e){return Pt(e)||Jt(e)},Gd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,$c=/(?:-?\.?\d|\.)+/gi,Wd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ec=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Xd=/[+-]=-?[.\d]+/,Yd=/[^,'"\[\]\s]+/gi,nS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,ai,jc,ku,zn={},Ja={},qd,Zd=function(e){return(Ja=zr(e,zn))&&wn},Hu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ao=function(e,t){return!t&&console.warn(e)},Kd=function(e,t){return e&&(zn[e]=t)&&Ja&&(Ja[e]=t)||zn},wo=function(){return 0},iS={suppressEvents:!0,isStart:!0,kill:!1},Na={suppressEvents:!0,kill:!1},rS={suppressEvents:!0},Vu={},er=[],Jc={},$d,Un={},tc={},gf=30,Oa=[],Gu="",Wu=function(e){var t=e[0],n,i;if(vi(t)||Pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Oa.length;i--&&!Oa[i].targetTest(t););n=Oa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Mp(e[i],n)))||e.splice(i,1);return e},Rr=function(e){return e._gsap||Wu(Kn(e))[0]._gsap},jd=function(e,t,n){return(n=e[t])&&Pt(n)?e[t]():Bu(n)&&e.getAttribute&&e.getAttribute(t)||n},Tn=function(e,t){return(e=e.split(",")).forEach(t)||e},Dt=function(e){return Math.round(e*1e5)/1e5||0},Kt=function(e){return Math.round(e*1e7)/1e7||0},Cs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},sS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Qa=function(){var e=er.length,t=er.slice(0),n,i;for(Jc={},er.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jd=function(e,t,n,i){er.length&&!an&&Qa(),e.render(t,n,an&&t<0&&(e._initted||e._startAt)),er.length&&!an&&Qa()},Qd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Yd).length<2?t:Jt(e)?e.trim():e},ep=function(e){return e},jn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},oS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},zr=function(e,t){for(var n in t)e[n]=t[n];return e},vf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=vi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},el=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ho=function(e){var t=e.parent||wt,n=e.keyframes?oS(ln(e.keyframes)):jn;if(En(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},aS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},tp=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},_l=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},lS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qc=function(e,t,n,i){return e._startAt&&(an?e._startAt.revert(Na):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},cS=function r(e){return!e||e._ts&&r(e.parent)},xf=function(e){return e._repeat?ks(e._tTime,e=e.duration()+e._rDelay)*e:0},ks=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},tl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gl=function(e){return e._end=Kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},vl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gl(e),n._dirty||Pr(n,e)),e},np=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=tl(e.rawTime(),t),(!t._dur||ko(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),Pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},hi=function(e,t,n,i){return t.parent&&sr(t),t._start=Kt((Ni(n)?n:n||e!==wt?Gn(e,n,t):e._time)+t._delay),t._end=Kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),tp(e,t,"_first","_last",e._sort?"_start":0),eu(t)||(e._recent=t),i||np(e,t),e._ts<0&&vl(e,e._tTime),e},ip=function(e,t){return(zn.ScrollTrigger||Hu("scrollTrigger",t))&&zn.ScrollTrigger.create(t,e)},rp=function(e,t,n,i,s){if(Yu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!an&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$d!==Nn.frame)return er.push(e),e._lazy=[s,i],1},uS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},eu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hS=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&uS(e)&&!(!e._initted&&eu(e))||(e._ts<0||e._dp._ts<0)&&!eu(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=ko(0,e._tDur,t),u=ks(l,o),e._yoyo&&u&1&&(a=1-a),u!==ks(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||an||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&rp(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Qc(e,t,n,!0),e._onUpdate&&!n&&Fn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&sr(e,1),!n&&!an&&(Fn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Hs=function(e,t,n,i){var s=e._repeat,a=Kt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Kt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&vl(e,e._tTime=e._tDur*o),e.parent&&gl(e),n||Pr(e.parent,e),e},Mf=function(e){return e instanceof _n?Pr(e):Hs(e,e._dur)},dS={_start:0,endTime:wo,totalDuration:wo},Gn=function r(e,t,n){var i=e.labels,s=e._recent||dS,a=e.duration()>=Zn?s.endTime(!1):e._dur,o,l,c;return Jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},fo=function(e,t,n){var i=Ni(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;a.immediateRender=En(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Bt(t[0],a,t[s+1])},cr=function(e,t){return e||e===0?t(e):t},ko=function(e,t,n){return n<e?e:n>t?t:n},on=function(e,t){return!Jt(e)||!(t=nS.exec(e))?"":t[1]},pS=function(e,t,n){return cr(n,function(i){return ko(e,t,i)})},tu=[].slice,sp=function(e,t){return e&&vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vi(e[0]))&&!e.nodeType&&e!==ai},mS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Jt(i)&&!t||sp(i,1)?(s=n).push.apply(s,Kn(i)):n.push(i)})||n},Kn=function(e,t,n){return Tt&&!t&&Tt.selector?Tt.selector(e):Jt(e)&&!n&&(jc||!Vs())?tu.call((t||ku).querySelectorAll(e),0):ln(e)?mS(e,n):sp(e)?tu.call(e,0):e?[e]:[]},nu=function(e){return e=Kn(e)[0]||Ao("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Kn(t,n.querySelectorAll?n:n===e?Ao("Invalid scope")||ku.createElement("div"):e)}},op=function(e){return e.sort(function(){return .5-Math.random()})},ap=function(e){if(Pt(e))return e;var t=vi(e)?e:{each:e},n=Lr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return Jt(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(f,h,g){var _=(g||t).length,p=a[_],m,E,M,T,C,w,A,L,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,Zn])[1],!S){for(A=-Zn;A<(A=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(p=a[_]=[],m=l?Math.min(S,_)*u-.5:i%S,E=S===Zn?0:l?_*d/S-.5:i/S|0,A=0,L=Zn,w=0;w<_;w++)M=w%S-m,T=E-(w/S|0),p[w]=C=c?Math.abs(c==="y"?T:M):Vd(M*M+T*T),C>A&&(A=C),C<L&&(L=C);i==="random"&&op(p),p.max=A-L,p.min=L,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=on(t.amount||t.each)||0,n=n&&_<0?gp(n):n}return _=(p[f]-p.min)/p.max||0,Kt(p.b+(n?n(_):_)*p.v)+p.u}},iu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ni(n)?0:on(n))}},lp=function(e,t){var n=ln(e),i,s;return!n&&vi(e)&&(i=n=e.radius||Zn,e.values?(e=Kn(e.values),(s=!Ni(e[0]))&&(i*=i)):e=iu(e.increment)),cr(t,n?Pt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Zn,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:a,s||u===a||Ni(a)?u:u+on(a)}:iu(e))},cp=function(e,t,n,i){return cr(ln(e)?!t:n===!0?!!(n=0):!i,function(){return ln(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},_S=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},gS=function(e,t){return function(n){return e(parseFloat(n))+(t||on(n))}},vS=function(e,t,n){return hp(e,t,0,1,n)},up=function(e,t,n){return cr(n,function(i){return e[~~t(i)]})},xS=function r(e,t,n){var i=t-e;return ln(e)?up(e,r(0,e.length),t):cr(n,function(s){return(i+(s-e)%i)%i+e})},MS=function r(e,t,n){var i=t-e,s=i*2;return ln(e)?up(e,r(0,e.length-1),t):cr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Co=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Yd:$c),n+=e.substr(t,i-t)+cp(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},hp=function(e,t,n,i,s){var a=t-e,o=i-n;return cr(s,function(l){return n+((l-e)/a*o||0)})},SS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=Jt(e),o={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(ln(e)&&!ln(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=zr(ln(e)?[]:{},e));if(!u){for(l in t)Xu.call(o,e,l,"get",t[l]);s=function(g){return Ku(g,o)||(a?e.p:e)}}}return cr(n,s)},Sf=function(e,t,n){var i=e.labels,s=Zn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Fn=function(e,t,n){var i=e.vars,s=i[t],a=Tt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&er.length&&Qa(),o&&(Tt=o),u=l?s.apply(c,l):s.call(c),Tt=a,u},no=function(e){return sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!an),e.progress()<1&&Fn(e,"onInterrupt"),e},Ss,fp=[],dp=function(e){if(e)if(e=!e.name&&e.default||e,zu()||e.headless){var t=e.name,n=Pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:wo,render:Ku,add:Xu,kill:FS,modifier:OS,rawVars:0},a={targetTest:0,get:0,getSetter:Zu,aliases:{},register:0};if(Vs(),e!==i){if(Un[t])return;jn(i,jn(el(e,s),a)),zr(i.prototype,zr(s,el(e,a))),Un[i.prop=t]=i,e.targetTest&&(Oa.push(i),Vu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Kd(t,i),e.register&&e.register(wn,i,bn)}else fp.push(e)},gt=255,io={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},nc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*gt+.5|0},pp=function(e,t,n){var i=e?Ni(e)?[e>>16,e>>8&gt,e&gt]:0:io.black,s,a,o,l,c,u,d,f,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),io[e])i=io[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&gt,i&gt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&gt,e&gt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match($c),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=nc(l+1/3,s,a),i[1]=nc(l,s,a),i[2]=nc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Wd),n&&i.length<4&&(i[3]=1),i}else i=e.match($c)||io.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/gt,a=i[1]/gt,o=i[2]/gt,d=Math.max(s,a,o),f=Math.min(s,a,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},mp=function(e){var t=[],n=[],i=-1;return e.split(tr).forEach(function(s){var a=s.match(Ms)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},yf=function(e,t,n){var i="",s=(e+i).match(tr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=pp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=mp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(tr,"1").split(Ms),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(tr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},tr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in io)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),yS=/hsl[a]?\(/,_p=function(e){var t=e.join(" "),n;if(tr.lastIndex=0,tr.test(t))return n=yS.test(t),e[1]=yf(e[1],n),e[0]=yf(e[0],n,mp(e[1])),!0},Ro,Nn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,f,h,g=function _(p){var m=r()-i,E=p===!0,M,T,C,w;if((m>e||m<0)&&(n+=m-t),i+=m,C=i-n,M=C-a,(M>0||E)&&(w=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,a+=M+(M>=s?4:s-M),T=1),E||(l=c(_)),T)for(h=0;h<o.length;h++)o[h](C,f,w,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){qd&&(!jc&&zu()&&(ai=jc=window,ku=ai.document||{},zn.gsap=wn,(ai.gsapVersions||(ai.gsapVersions=[])).push(wn.version),Zd(Ja||ai.GreenSockGlobals||!ai.gsap&&ai||{}),fp.forEach(dp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Ro=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ro=0,c=wo},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,E){var M=m?function(T,C,w,A){p(T,C,w,A),d.remove(M)}:p;return d.remove(p),o[E?"unshift":"push"](M),Vs(),M},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&h>=m&&h--},_listeners:o},d}(),Vs=function(){return!Ro&&Nn.wake()},ot={},ES=/^[\d.\-M][\d.\-,\s]/,TS=/["']/g,bS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(TS,"").trim():+c,i=l.substr(o+1).trim();return t},AS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},wS=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[bS(t[1])]:AS(e).split(",").map(Qd)):ot._CE&&ES.test(e)?ot._CE("",e):n},gp=function(e){return function(t){return 1-e(1-t)}},vp=function r(e,t){for(var n=e._first,i;n;)n instanceof _n?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Lr=function(e,t){return e&&(Pt(e)?e:ot[e]||wS(e))||t},Yr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Tn(e,function(o){ot[o]=zn[o]=s,ot[a=o.toLowerCase()]=n;for(var l in s)ot[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[o+"."+l]=s[l]}),s},xp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ic=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Kc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*tS((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:xp(o);return s=Kc/s,l.config=function(c,u){return r(e,c,u)},l},rc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:xp(n);return i.config=function(s){return r(e,s)},i};Tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Yr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Yr("Elastic",ic("in"),ic("out"),ic());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Yr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Yr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Yr("Circ",function(r){return-(Vd(1-r*r)-1)});Yr("Sine",function(r){return r===1?1:-eS(r*JM)+1});Yr("Back",rc("in"),rc("out"),rc());ot.SteppedEase=ot.steps=zn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Mt;return function(o){return((i*ko(0,a,o)|0)+s)*n}}};zs.ease=ot["quad.out"];Tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Gu+=r+","+r+"Params,"});var Mp=function(e,t){this.id=QM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:jd,this.set=t?t.getSetter:Zu},Po=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Hs(this,+t.duration,1,1),this.data=t.data,Tt&&(this._ctx=Tt,Tt.data.push(this)),Ro||Nn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Vs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vl(this,n),!s._dp||s.parent||np(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ks(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?tl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(ko(-Math.abs(this._delay),this._tDur,s),i!==!1),gl(this),lS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&hi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(En(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=rS);var i=an;return an=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Gn(this,n),En(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,En(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Pt(n)?n:ep,o=function(){var c=i.then;i.then=null,Pt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){no(this)},r}();jn(Po.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var _n=function(r){Hd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=En(n.sortChildren),wt&&hi(n.parent||wt,bi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ip(bi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return fo(0,arguments,this),this},t.from=function(i,s,a){return fo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return fo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ho(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Bt(i,s,Gn(this,a),1),this},t.call=function(i,s,a){return hi(this,Bt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Bt(i,a,Gn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ho(a).immediateRender=En(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,ho(o).immediateRender=En(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Kt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,g,_,p,m,E,M,T,C,w,A;if(this!==wt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,T=this._start,M=this._ts,m=!M,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Kt(u%p),u===l?(_=this._repeat,f=c):(_=~~(u/p),_&&_===u/p&&(f=c,_--),f>c&&(f=c)),C=ks(this._tTime,p),!o&&this._tTime&&C!==_&&this._tTime-C*p-this._dur<=0&&(C=_),w&&_&1&&(f=c-f,A=1),_!==C&&!this._lock){var L=w&&C&1,S=L===(w&&_&1);if(_<C&&(L=!L),o=L?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Kt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Fn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;vp(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=fS(this,Kt(o),Kt(f)),E&&(u-=f-(f=E._start))),this._tTime=u,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!_&&(Fn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&E!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!m){E=0,g&&(u+=this._zTime=-Mt);break}}h=g}else{h=this._last;for(var x=i<0?i:f;h;){if(g=h._prev,(h._act||x<=h._end)&&h._ts&&E!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(x-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(x-h._start)*h._ts,s,a||an&&(h._initted||h._startAt)),f!==this._time||!this._ts&&!m){E=0,g&&(u+=this._zTime=x?-Mt:Mt);break}}h=g}}if(E&&!s&&(this.pause(),E.render(f>=o?0:-Mt)._zTime=f>=o?1:-1,this._ts))return this._start=T,gl(this),this.render(i,s,a);this._onUpdate&&!s&&Fn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(T===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&sr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Fn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Ni(s)||(s=Gn(this,s,i)),!(i instanceof Po)){if(ln(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Jt(i))return this.addLabel(i,s);if(Pt(i))i=Bt.delayedCall(0,i);else return this}return this!==i?hi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Zn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Bt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Jt(i)?this.removeLabel(i):Pt(i)?this.killTweensOf(i):(_l(this,i),i===this._recent&&(this._recent=this._last),Pr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Kt(Nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Gn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Bt.delayedCall(0,s||wo,a);return o.data="isPause",this._hasPause=1,hi(this,o,Gn(this,i))},t.removePause=function(i){var s=this._first;for(i=Gn(this,i);s;)s._start===i&&s.data==="isPause"&&sr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)qi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Kn(i),l=this._first,c=Ni(s),u;l;)l instanceof Bt?sS(l._targets,o)&&(c?(!qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Gn(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,g=Bt.to(a,jn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Mt,onStart:function(){if(a.pause(),!h){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Hs(g,p,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,d||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,jn({startAt:{time:Gn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Sf(this,Gn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Sf(this,Gn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Pr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Pr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Zn,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,hi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Hs(a,a===wt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(wt._ts&&(Jd(wt,tl(i,wt)),$d=Nn.frame),Nn.frame>=gf){gf+=Bn.autoSleep||120;var s=wt._first;if((!s||!s._ts)&&Bn.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},e}(Po);jn(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var CS=function(e,t,n,i,s,a,o){var l=new bn(this._pt,e,t,0,1,Ap,null,s),c=0,u=0,d,f,h,g,_,p,m,E;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Co(i)),a&&(E=[n,i],a(E,e,t),n=E[0],i=E[1]),f=n.match(ec)||[];d=ec.exec(i);)g=d[0],_=i.substring(c,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Cs(p,g)-p:parseFloat(g)-p,m:h&&h<4?Math.round:0},c=ec.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Xd.test(i)||m)&&(l.e=0),this._pt=l,l},Xu=function(e,t,n,i,s,a,o,l,c,u){Pt(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:Pt(d)?c?e[t.indexOf("set")||!Pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Pt(d)?c?IS:Tp:qu,g;if(Jt(i)&&(~i.indexOf("random(")&&(i=Co(i)),i.charAt(1)==="="&&(g=Cs(f,i)+(on(f)||0),(g||g===0)&&(i=g))),!u||f!==i||ru)return!isNaN(f*i)&&i!==""?(g=new bn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?NS:bp,0,h),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&Hu(t,i),CS.call(this,e,t,f,i,h,l||Bn.stringFilter,c))},RS=function(e,t,n,i,s){if(Pt(e)&&(e=po(e,s,t,n,i)),!vi(e)||e.style&&e.nodeType||ln(e)||Gd(e))return Jt(e)?po(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=po(e[o],s,t,n,i);return a},Sp=function(e,t,n,i,s,a){var o,l,c,u;if(Un[e]&&(o=new Un[e]).init(s,o.rawVars?t[e]:RS(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new bn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ss))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},qi,ru,Yu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,E=m&&m.data==="nested"?m.vars.targets:p,M=e._overwrite==="auto"&&!Fu,T=e.timeline,C,w,A,L,S,x,P,U,z,K,$,W,X;if(T&&(!f||!s)&&(s="none"),e._ease=Lr(s,zs.ease),e._yEase=d?gp(Lr(d===!0?s:d,zs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!T&&!!i.runBackwards,!T||f&&!i.stagger){if(U=p[0]?Rr(p[0]).harness:0,W=U&&i[U.prop],C=el(i,Vu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!h?_.render(-1,!0):_.revert(u&&g?Na:iS),_._lazy=0),a){if(sr(e._startAt=Bt.set(p,jn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&En(l),startAt:null,delay:0,onUpdate:c&&function(){return Fn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an||!o&&!h)&&e._startAt.revert(Na),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),A=jn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&En(l),immediateRender:o,stagger:0,parent:m},C),W&&(A[U.prop]=W),sr(e._startAt=Bt.set(p,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an?e._startAt.revert(Na):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&En(l)||l&&!g,w=0;w<p.length;w++){if(S=p[w],P=S._gsap||Wu(p)[w]._gsap,e._ptLookup[w]=K={},Jc[P.id]&&er.length&&Qa(),$=E===p?w:E.indexOf(S),U&&(z=new U).init(S,W||C,e,$,E)!==!1&&(e._pt=L=new bn(e._pt,S,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(H){K[H]=L}),z.priority&&(x=1)),!U||W)for(A in C)Un[A]&&(z=Sp(A,C,e,$,S,E))?z.priority&&(x=1):K[A]=L=Xu.call(e,S,A,"get",C[A],$,E,0,i.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),M&&e._pt&&(qi=e,wt.killTweensOf(S,K,e.globalTime(t)),X=!e.parent,qi=0),e._pt&&l&&(Jc[P.id]=1)}x&&wp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&T.render(Zn,!0,!0)},PS=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ru=1,e.vars[t]="+=0",Yu(e,o),ru=0,l?Ao(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Dt(n)+on(d.e)),d.b&&(d.b=u.s+on(d.b))},LS=function(e,t){var n=e[0]?Rr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=zr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},DS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(ln(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},po=function(e,t,n,i,s){return Pt(e)?e.call(t,n,i,s):Jt(e)&&~e.indexOf("random(")?Co(e):e},yp=Gu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ep={};Tn(yp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ep[r]=1});var Bt=function(r){Hd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ho(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,E=i.parent||wt,M=(ln(n)||Gd(n)?Ni(n[0]):"length"in i)?[n]:Kn(n),T,C,w,A,L,S,x,P;if(o._targets=M.length?Wu(M):Ao("GSAP target "+n+" not found. https://gsap.com",!Bn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||f||ma(c)||ma(u)){if(i=o.vars,T=o.timeline=new _n({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:M}),T.kill(),T.parent=T._dp=bi(o),T._start=0,f||ma(c)||ma(u)){if(A=M.length,x=f&&ap(f),vi(f))for(L in f)~yp.indexOf(L)&&(P||(P={}),P[L]=f[L]);for(C=0;C<A;C++)w=el(i,Ep),w.stagger=0,m&&(w.yoyoEase=m),P&&zr(w,P),S=M[C],w.duration=+po(c,bi(o),C,S,M),w.delay=(+po(u,bi(o),C,S,M)||0)-o._delay,!f&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),T.to(S,w,x?x(C,S,M):0),T._ease=ot.none;T.duration()?c=u=0:o.timeline=0}else if(g){ho(jn(T.vars.defaults,{ease:"none"})),T._ease=Lr(g.ease||i.ease||"none");var U=0,z,K,$;if(ln(g))g.forEach(function(W){return T.to(M,W,">")}),T.duration();else{w={};for(L in g)L==="ease"||L==="easeEach"||DS(L,g[L],w,g.easeEach);for(L in w)for(z=w[L].sort(function(W,X){return W.t-X.t}),U=0,C=0;C<z.length;C++)K=z[C],$={ease:K.e,duration:(K.t-(C?z[C-1].t:0))/100*c},$[L]=K.v,T.to(M,$,U),U+=$.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return h===!0&&!Fu&&(qi=bi(o),wt.killTweensOf(M),qi=0),hi(E,bi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Kt(E._time)&&En(d)&&cS(bi(o))&&E.data!=="nested")&&(o._tTime=-Mt,o.render(Math.max(0,-u)||0)),p&&ip(bi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Mt&&!u?l:i<Mt?0:i,f,h,g,_,p,m,E,M,T;if(!c)hS(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=d,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=Kt(d%_),d===l?(g=this._repeat,f=c):(g=~~(d/_),g&&g===Kt(d/_)&&(f=c,g--),f>c&&(f=c)),m=this._yoyo&&g&1,m&&(T=this._yEase,f=c-f),p=ks(this._tTime,_),f===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&(M&&this._yEase&&vp(M,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Kt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(rp(this,u?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(T||this._ease)(f/c),this._from&&(this.ratio=E=1-E),f&&!o&&!s&&!g&&(Fn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(E,h.d),h=h._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Qc(this,i,s,a),Fn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Fn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Qc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&sr(this,1),!s&&!(u&&!o)&&(d||o||m)&&(Fn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Ro||Nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Yu(this,c),u=this._ease(c/this._dur),PS(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(vl(this,0),this.parent||tp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?no(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,qi&&qi.vars.overwrite!==!0)._first||no(this),this.parent&&a!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Kn(i):o,c=this._ptLookup,u=this._pt,d,f,h,g,_,p,m;if((!s||s==="all")&&aS(o,l))return s==="all"&&(this._pt=0),no(this);for(d=this._op=this._op||[],s!=="all"&&(Jt(s)&&(_={},Tn(s,function(E){return _[E]=1}),s=_),s=LS(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(d[m]=s,g=f,h={}):(h=d[m]=d[m]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&_l(this,p,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&no(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return fo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return fo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return wt.killTweensOf(i,s,a)},e}(Po);jn(Bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Tn("staggerTo,staggerFrom,staggerFromTo",function(r){Bt[r]=function(){var e=new _n,t=tu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var qu=function(e,t,n){return e[t]=n},Tp=function(e,t,n){return e[t](n)},IS=function(e,t,n,i){return e[t](i.fp,n)},US=function(e,t,n){return e.setAttribute(t,n)},Zu=function(e,t){return Pt(e[t])?Tp:Bu(e[t])&&e.setAttribute?US:qu},bp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},NS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ap=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ku=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},OS=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},FS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?_l(this,t,"_pt"):t.dep||(n=1),t=i;return!n},BS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},wp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},bn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||bp,this.d=l||this,this.set=c||qu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=BS,this.m=n,this.mt=s,this.tween=i},r}();Tn(Gu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Vu[r]=1});zn.TweenMax=zn.TweenLite=Bt;zn.TimelineLite=zn.TimelineMax=_n;wt=new _n({sortChildren:!1,defaults:zs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Bn.stringFilter=_p;var Dr=[],Fa={},zS=[],Ef=0,kS=0,sc=function(e){return(Fa[e]||zS).map(function(t){return t()})},su=function(){var e=Date.now(),t=[];e-Ef>2&&(sc("matchMediaInit"),Dr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ai.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),sc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ef=e,sc("matchMedia"))},Cp=function(){function r(t,n){this.selector=n&&nu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=kS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Pt(n)&&(s=i,i=n,n=Pt);var a=this,o=function(){var c=Tt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=nu(s)),Tt=a,d=i.apply(a,arguments),Pt(d)&&a._r.push(d),Tt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Pt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Tt;Tt=null,n(this),Tt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Bt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof _n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Bt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Dr.length;a--;)Dr[a].id===this.id&&Dr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),HS=function(){function r(t){this.contexts=[],this.scope=t,Tt&&Tt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){vi(n)||(n={matches:n});var a=new Cp(0,s||this.scope),o=a.conditions={},l,c,u;Tt&&!a.selector&&(a.selector=Tt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ai.matchMedia(n[c]),l&&(Dr.indexOf(a)<0&&Dr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(su):l.addEventListener("change",su)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),nl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return dp(i)})},timeline:function(e){return new _n(e)},getTweensOf:function(e,t){return wt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Jt(e)&&(e=Kn(e)[0]);var s=Rr(e||{}).get,a=n?ep:Qd;return n==="native"&&(n=""),e&&(t?a((Un[t]&&Un[t].get||s)(e,t,n,i)):function(o,l,c){return a((Un[o]&&Un[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Kn(e),e.length>1){var i=e.map(function(u){return wn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=Un[t],o=Rr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Ss._pt=0,d.init(e,n?u+n:u,Ss,0,[e]),d.render(1,d),Ss._pt&&Ku(1,Ss)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=wn.to(e,zr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Lr(e.ease,zs.ease)),vf(zs,e||{})},config:function(e){return vf(Bn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Un[o]&&!zn[o]&&Ao(t+" effect requires "+o+" plugin.")}),tc[t]=function(o,l,c){return n(Kn(o),jn(l||{},s),c)},a&&(_n.prototype[t]=function(o,l,c){return this.add(tc[t](o,vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=Lr(t)},parseEase:function(e,t){return arguments.length?Lr(e,t):ot},getById:function(e){return wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new _n(e),i,s;for(n.smoothChildTiming=En(e.smoothChildTiming),wt.remove(n),n._dp=0,n._time=n._tTime=wt._time,i=wt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Bt&&i.vars.onComplete===i._targets[0]))&&hi(n,i,i._start-i._delay),i=s;return hi(wt,n,0),n},context:function(e,t){return e?new Cp(e,t):Tt},matchMedia:function(e){return new HS(e)},matchMediaRefresh:function(){return Dr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||su()},addEventListener:function(e,t){var n=Fa[e]||(Fa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Fa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:xS,wrapYoyo:MS,distribute:ap,random:cp,snap:lp,normalize:vS,getUnit:on,clamp:pS,splitColor:pp,toArray:Kn,selector:nu,mapRange:hp,pipe:_S,unitize:gS,interpolate:SS,shuffle:op},install:Zd,effects:tc,ticker:Nn,updateRoot:_n.updateRoot,plugins:Un,globalTimeline:wt,core:{PropTween:bn,globals:Kd,Tween:Bt,Timeline:_n,Animation:Po,getCache:Rr,_removeLinkedListItem:_l,reverting:function(){return an},context:function(e){return e&&Tt&&(Tt.data.push(e),e._ctx=Tt),Tt},suppressOverwrites:function(e){return Fu=e}}};Tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return nl[r]=Bt[r]});Nn.add(_n.updateRoot);Ss=nl.to({},{duration:0});var VS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},GS=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=VS(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},oc=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Jt(s)&&(l={},Tn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}GS(o,s)}}}},wn=nl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},oc("roundProps",iu),oc("modifiers"),oc("snap",lp))||nl;Bt.version=_n.version=wn.version="3.12.5";qd=1;zu()&&Vs();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Tf,Zi,Rs,$u,wr,bf,ju,WS=function(){return typeof window<"u"},Oi={},xr=180/Math.PI,Ps=Math.PI/180,ds=Math.atan2,Af=1e8,Ju=/([A-Z])/g,XS=/(left|right|width|margin|padding|x)/i,YS=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ou=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ZS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},KS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Rp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Pp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},$S=function(e,t,n){return e.style[t]=n},jS=function(e,t,n){return e.style.setProperty(t,n)},JS=function(e,t,n){return e._gsap[t]=n},QS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ey=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ty=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ct="transform",An=Ct+"Origin",ny=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Oi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ai(i,o)}):this.tfm[e]=a.x?a[e]:Ai(i,e),e===An&&(this.tfm.zOrigin=a.zOrigin);else return di.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ct)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(An,t,"")),e=Ct}(s||t)&&this.props.push(e,t,s[e])},Lp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},iy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ju,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ju(),(!s||!s.isStart)&&!n[Ct]&&(Lp(n),i.zOrigin&&n[An]&&(n[An]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Dp=function(e,t){var n={target:e,props:[],revert:iy,save:ny};return e._gsap||wn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Ip,au=function(e,t){var n=Zi.createElementNS?Zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Zi.createElement(e);return n&&n.style?n:Zi.createElement(e)},_i=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ju,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Gs(t)||t,1)||""},wf="O,Moz,ms,Ms,Webkit".split(","),Gs=function(e,t,n){var i=t||wr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(wf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?wf[a]:"")+e},lu=function(){WS()&&window.document&&(Tf=window,Zi=Tf.document,Rs=Zi.documentElement,wr=au("div")||{style:{}},au("div"),Ct=Gs(Ct),An=Ct+"Origin",wr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ip=!!Gs("perspective"),ju=wn.core.reverting,$u=1)},ac=function r(e){var t=au("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Rs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Rs.removeChild(t),this.style.cssText=s,a},Cf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Up=function(e){var t;try{t=e.getBBox()}catch{t=ac.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ac||(t=ac.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Cf(e,["x","cx","x1"])||0,y:+Cf(e,["y","cy","y1"])||0,width:0,height:0}:t},Np=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Up(e))},kr=function(e,t){if(t){var n=e.style,i;t in Oi&&t!==An&&(t=Ct),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ju,"-$1").toLowerCase())):n.removeAttribute(t)}},Ki=function(e,t,n,i,s,a){var o=new bn(e._pt,t,n,0,1,a?Pp:Rp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Rf={deg:1,rad:1,turn:1},ry={grid:1,flex:1},or=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=wr.style,l=XS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",g,_,p,m;if(i===a||!s||Rf[i]||Rf[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Np(e),(h||a==="%")&&(Oi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Dt(h?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(f?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Zi||!_.appendChild)&&(_=Zi.body),p=_._gsap,p&&h&&p.width&&l&&p.time===Nn.time&&!p.uncache)return Dt(s/p.width*d);if(h&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=d+i,g=e[u],E?e.style[t]=E:kr(e,t)}else(h||a==="%")&&!ry[_i(_,"display")]&&(o.position=_i(e,"position")),_===e&&(o.position="static"),_.appendChild(wr),g=wr[u],_.removeChild(wr),o.position="absolute";return l&&h&&(p=Rr(_),p.time=Nn.time,p.width=_[u]),Dt(f?g*s/d:g&&s?d/g*s:0)},Ai=function(e,t,n,i){var s;return $u||lu(),t in di&&t!=="transform"&&(t=di[t],~t.indexOf(",")&&(t=t.split(",")[0])),Oi[t]&&t!=="transform"?(s=Do(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rl(_i(e,An))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=il[t]&&il[t](e,t,n)||_i(e,t)||jd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?or(e,t,s,n)+n:s},sy=function(e,t,n,i){if(!n||n==="none"){var s=Gs(t,e,1),a=s&&_i(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=_i(e,"borderTopColor"))}var o=new bn(this._pt,e.style,t,0,1,Ap),l=0,c=0,u,d,f,h,g,_,p,m,E,M,T,C;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=_i(e,t)||i,_?e.style[t]=_:kr(e,t)),u=[n,i],_p(u),n=u[0],i=u[1],f=n.match(Ms)||[],C=i.match(Ms)||[],C.length){for(;d=Ms.exec(i);)p=d[0],E=i.substring(l,d.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(h=parseFloat(_)||0,T=_.substr((h+"").length),p.charAt(1)==="="&&(p=Cs(h,p)+T),m=parseFloat(p),M=p.substr((m+"").length),l=Ms.lastIndex-M.length,M||(M=M||Bn.units[t]||T,l===i.length&&(i+=M,o.e+=M)),T!==M&&(h=or(e,t,_,M)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:h,c:m-h,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Pp:Rp;return Xd.test(i)&&(o.e=0),this._pt=o,o},Pf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},oy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Pf[n]||n,t[1]=Pf[i]||i,t.join(" ")},ay=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Oi[o]&&(l=1,o=o==="transformOrigin"?An:Ct),kr(n,o);l&&(kr(n,Ct),a&&(a.svg&&n.removeAttribute("transform"),Do(n,1),a.uncache=1,Lp(i)))}},il={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new bn(e._pt,t,n,0,0,ay);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Lo=[1,0,0,1,0,0],Op={},Fp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Lf=function(e){var t=_i(e,Ct);return Fp(t)?Lo:t.substr(7).match(Wd).map(Dt)},Qu=function(e,t){var n=e._gsap||Rr(e),i=e.style,s=Lf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Lo:s):(s===Lo&&!e.offsetParent&&e!==Rs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Rs.appendChild(e)),s=Lf(e),l?i.display=l:kr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Rs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},cu=function(e,t,n,i,s,a){var o=e._gsap,l=s||Qu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],g=l[1],_=l[2],p=l[3],m=l[4],E=l[5],M=t.split(" "),T=parseFloat(M[0])||0,C=parseFloat(M[1])||0,w,A,L,S;n?l!==Lo&&(A=h*p-g*_)&&(L=T*(p/A)+C*(-_/A)+(_*E-p*m)/A,S=T*(-g/A)+C*(h/A)-(h*E-g*m)/A,T=L,C=S):(w=Up(e),T=w.x+(~M[0].indexOf("%")?T/100*w.width:T),C=w.y+(~(M[1]||M[0]).indexOf("%")?C/100*w.height:C)),i||i!==!1&&o.smooth?(m=T-c,E=C-u,o.xOffset=d+(m*h+E*_)-m,o.yOffset=f+(m*g+E*p)-E):o.xOffset=o.yOffset=0,o.xOrigin=T,o.yOrigin=C,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[An]="0px 0px",a&&(Ki(a,o,"xOrigin",c,T),Ki(a,o,"yOrigin",u,C),Ki(a,o,"xOffset",d,o.xOffset),Ki(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",T+" "+C)},Do=function(e,t){var n=e._gsap||new Mp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=_i(e,An)||"0",u,d,f,h,g,_,p,m,E,M,T,C,w,A,L,S,x,P,U,z,K,$,W,X,H,oe,D,ce,ze,Ye,j,ee;return u=d=f=_=p=m=E=M=T=0,h=g=1,n.svg=!!(e.getCTM&&Np(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ct]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ct]!=="none"?l[Ct]:"")),i.scale=i.rotate=i.translate="none"),A=Qu(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),cu(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,A)),C=n.xOrigin||0,w=n.yOrigin||0,A!==Lo&&(P=A[0],U=A[1],z=A[2],K=A[3],u=$=A[4],d=W=A[5],A.length===6?(h=Math.sqrt(P*P+U*U),g=Math.sqrt(K*K+z*z),_=P||U?ds(U,P)*xr:0,E=z||K?ds(z,K)*xr+_:0,E&&(g*=Math.abs(Math.cos(E*Ps))),n.svg&&(u-=C-(C*P+w*z),d-=w-(C*U+w*K))):(ee=A[6],Ye=A[7],D=A[8],ce=A[9],ze=A[10],j=A[11],u=A[12],d=A[13],f=A[14],L=ds(ee,ze),p=L*xr,L&&(S=Math.cos(-L),x=Math.sin(-L),X=$*S+D*x,H=W*S+ce*x,oe=ee*S+ze*x,D=$*-x+D*S,ce=W*-x+ce*S,ze=ee*-x+ze*S,j=Ye*-x+j*S,$=X,W=H,ee=oe),L=ds(-z,ze),m=L*xr,L&&(S=Math.cos(-L),x=Math.sin(-L),X=P*S-D*x,H=U*S-ce*x,oe=z*S-ze*x,j=K*x+j*S,P=X,U=H,z=oe),L=ds(U,P),_=L*xr,L&&(S=Math.cos(L),x=Math.sin(L),X=P*S+U*x,H=$*S+W*x,U=U*S-P*x,W=W*S-$*x,P=X,$=H),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),h=Dt(Math.sqrt(P*P+U*U+z*z)),g=Dt(Math.sqrt(W*W+ee*ee)),L=ds($,W),E=Math.abs(L)>2e-4?L*xr:0,T=j?1/(j<0?-j:j):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Fp(_i(e,Ct)),X&&e.setAttribute("transform",X))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(h*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Dt(h),n.scaleY=Dt(g),n.rotation=Dt(_)+o,n.rotationX=Dt(p)+o,n.rotationY=Dt(m)+o,n.skewX=E+o,n.skewY=M+o,n.transformPerspective=T+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[An]=rl(c)),n.xOffset=n.yOffset=0,n.force3D=Bn.force3D,n.renderTransform=n.svg?cy:Ip?Bp:ly,n.uncache=0,n},rl=function(e){return(e=e.split(" "))[0]+" "+e[1]},lc=function(e,t,n){var i=on(t);return Dt(parseFloat(t)+parseFloat(or(e,"x",n+"px",i)))+i},ly=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Bp(e,t)},_r="0deg",Js="0px",gr=") ",Bp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,E=n.target,M=n.zOrigin,T="",C=m==="auto"&&e&&e!==1||m===!0;if(M&&(d!==_r||u!==_r)){var w=parseFloat(u)*Ps,A=Math.sin(w),L=Math.cos(w),S;w=parseFloat(d)*Ps,S=Math.cos(w),a=lc(E,a,A*S*-M),o=lc(E,o,-Math.sin(w)*-M),l=lc(E,l,L*S*-M+M)}p!==Js&&(T+="perspective("+p+gr),(i||s)&&(T+="translate("+i+"%, "+s+"%) "),(C||a!==Js||o!==Js||l!==Js)&&(T+=l!==Js||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+gr),c!==_r&&(T+="rotate("+c+gr),u!==_r&&(T+="rotateY("+u+gr),d!==_r&&(T+="rotateX("+d+gr),(f!==_r||h!==_r)&&(T+="skew("+f+", "+h+gr),(g!==1||_!==1)&&(T+="scale("+g+", "+_+gr),E.style[Ct]=T||"translate(0, 0)"},cy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,E=n.forceCSS,M=parseFloat(a),T=parseFloat(o),C,w,A,L,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ps,c*=Ps,C=Math.cos(l)*d,w=Math.sin(l)*d,A=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=Ps,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,L*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),C*=S,w*=S)),C=Dt(C),w=Dt(w),A=Dt(A),L=Dt(L)):(C=d,L=f,w=A=0),(M&&!~(a+"").indexOf("px")||T&&!~(o+"").indexOf("px"))&&(M=or(h,"x",a,"px"),T=or(h,"y",o,"px")),(g||_||p||m)&&(M=Dt(M+g-(g*C+_*A)+p),T=Dt(T+_-(g*w+_*L)+m)),(i||s)&&(S=h.getBBox(),M=Dt(M+i/100*S.width),T=Dt(T+s/100*S.height)),S="matrix("+C+","+w+","+A+","+L+","+M+","+T+")",h.setAttribute("transform",S),E&&(h.style[Ct]=S)},uy=function(e,t,n,i,s){var a=360,o=Jt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?xr:1),c=l-i,u=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Af)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Af)%a-~~(c/a)*a)),e._pt=f=new bn(e._pt,t,n,i,c,qS),f.e=u,f.u="deg",e._props.push(n),f},Df=function(e,t){for(var n in t)e[n]=t[n];return e},hy=function(e,t,n){var i=Df({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,f,h,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ct]=t,o=Do(n,1),kr(n,Ct),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ct],a[Ct]=t,o=Do(n,1),a[Ct]=c);for(l in Oi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=on(c),g=on(u),d=h!==g?or(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new bn(e._pt,o,l,d,f-d,ou),e._pt.u=g||0,e._props.push(l));Df(o,i)};Tn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});il[e>1?"border"+r:r]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=a.map(function(g){return Ai(o,g,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},a.forEach(function(g,_){return h[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,h,d)}});var zp={name:"css",register:lu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,f,h,g,_,p,m,E,M,T,C,w,A,L;$u||lu(),this.styles=this.styles||Dp(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Un[_]&&Sp(_,t,n,i,e,s)))){if(h=typeof u,g=il[_],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Co(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",tr.lastIndex=0,tr.test(c)||(p=on(c),m=on(u)),m?p!==m&&(c=or(e,_,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),L.push(_,0,o[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Jt(c)&&~c.indexOf("random(")&&(c=Co(c)),on(c+"")||c==="auto"||(c+=Bn.units[_]||on(Ai(e,_))||""),(c+"").charAt(1)==="="&&(c=Ai(e,_))):c=Ai(e,_),f=parseFloat(c),E=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),d=parseFloat(u),_ in di&&(_==="autoAlpha"&&(f===1&&Ai(e,"visibility")==="hidden"&&d&&(f=0),L.push("visibility",0,o.visibility),Ki(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Oi,M){if(this.styles.save(_),T||(C=e._gsap,C.renderTransform&&!t.parseTransform||Do(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,T=this._pt=new bn(this._pt,o,Ct,0,1,C.renderTransform,C,0,-1),T.dep=1),_==="scale")this._pt=new bn(this._pt,C,"scaleY",C.scaleY,(E?Cs(C.scaleY,E+d):d)-C.scaleY||0,ou),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(An,0,o[An]),u=oy(u),C.svg?cu(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==C.zOrigin&&Ki(this,C,"zOrigin",C.zOrigin,m),Ki(this,o,_,rl(c),rl(u)));continue}else if(_==="svgOrigin"){cu(e,u,1,w,0,this);continue}else if(_ in Op){uy(this,C,_,f,E?Cs(f,E+u):u);continue}else if(_==="smoothOrigin"){Ki(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){hy(this,u,e);continue}}else _ in o||(_=Gs(_)||_);if(M||(d||d===0)&&(f||f===0)&&!YS.test(u)&&_ in o)p=(c+"").substr((f+"").length),d||(d=0),m=on(u)||(_ in Bn.units?Bn.units[_]:p),p!==m&&(f=or(e,_,c,m)),this._pt=new bn(this._pt,M?C:o,_,f,(E?Cs(f,E+d):d)-f,!M&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?KS:ou),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=ZS);else if(_ in o)sy.call(this,e,_,c,E?E+u:u);else if(_ in e)this.add(e,_,c||e[_],E?E+u:u,i,s);else if(_!=="parseTransform"){Hu(_,u);continue}M||(_ in o?L.push(_,0,o[_]):L.push(_,1,c||e[_])),a.push(_)}}A&&wp(this)},render:function(e,t){if(t.tween._time||!ju())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ai,aliases:di,getSetter:function(e,t,n){var i=di[t];return i&&i.indexOf(",")<0&&(t=i),t in Oi&&t!==An&&(e._gsap.x||Ai(e,"x"))?n&&bf===n?t==="scale"?QS:JS:(bf=n||{})&&(t==="scale"?ey:ty):e.style&&!Bu(e.style[t])?$S:~t.indexOf("-")?jS:Zu(e,t)},core:{_removeProperty:kr,_getMatrix:Qu}};wn.utils.checkPrefix=Gs;wn.core.getStyleSaver=Dp;(function(r,e,t,n){var i=Tn(r+","+e+","+t,function(s){Oi[s]=1});Tn(e,function(s){Bn.units[s]="deg",Op[s]=1}),di[i[13]]=r+","+e,Tn(n,function(s){var a=s.split(":");di[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Bn.units[r]="px"});wn.registerPlugin(zp);var Tr=wn.registerPlugin(zp)||wn;Tr.core.Tween;class fy{constructor(){this.experience=new Wr,this.scene=this.experience.scene,this.lerp={current:0,target:0,ease:.1},this.setModel(),this.onMouseMove()}setModel(){this.geometry=new Nu(10,3,16,100),this.material=new Pu({color:16737095,wireframe:!0}),this.torus=new fi(this.geometry,this.material),this.scene.add(this.torus),this.torus.scale.set(.2,.2,.2)}onMouseMove(){window.addEventListener("mousemove",e=>{this.rotation=(e.clientX-window.innerWidth/2)*2/window.innerWidth,this.lerp.target=this.rotation*.3})}resize(){}update(){this.lerp.current=Tr.utils.interpolate(this.lerp.current,this.lerp.target,this.lerp.ease),this.torus.rotation.y=this.lerp.current}}function dy(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function py(r,e,t){return e&&dy(r.prototype,e),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var en,Ba,On,$i,ji,Ls,kp,Mr,mo,Hp,Li,ni,Vp,Gp=function(){return en||typeof window<"u"&&(en=window.gsap)&&en.registerPlugin&&en},Wp=1,ys=[],tt=[],gi=[],_o=Date.now,uu=function(e,t){return t},my=function(){var e=mo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,tt),i.push.apply(i,gi),tt=n,gi=i,uu=function(a,o){return t[a](o)}},nr=function(e,t){return~gi.indexOf(e)&&gi[gi.indexOf(e)+1][t]},go=function(e){return!!~Hp.indexOf(e)},hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},_a="scrollLeft",ga="scrollTop",hu=function(){return Li&&Li.isPressed||tt.cache++},sl=function(e,t){var n=function i(s){if(s||s===0){Wp&&(On.history.scrollRestoration="manual");var a=Li&&Li.isPressed;s=i.v=Math.round(s)||(Li&&Li.iOS?1:0),e(s),i.cacheID=tt.cache,a&&uu("ss",s)}else(t||tt.cache!==i.cacheID||uu("ref"))&&(i.cacheID=tt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},gn={s:_a,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sl(function(r){return arguments.length?On.scrollTo(r,Vt.sc()):On.pageXOffset||$i[_a]||ji[_a]||Ls[_a]||0})},Vt={s:ga,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:gn,sc:sl(function(r){return arguments.length?On.scrollTo(gn.sc(),r):On.pageYOffset||$i[ga]||ji[ga]||Ls[ga]||0})},xn=function(e,t){return(t&&t._ctx&&t._ctx.selector||en.utils.toArray)(e)[0]||(typeof e=="string"&&en.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ar=function(e,t){var n=t.s,i=t.sc;go(e)&&(e=$i.scrollingElement||ji);var s=tt.indexOf(e),a=i===Vt.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+a]||hn(e,"scroll",hu);var o=tt[s+a],l=o||(tt[s+a]=sl(nr(e,n),!0)||(go(e)?i:sl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=en.getProperty(e,"scrollBehavior")==="smooth"),l},fu=function(e,t,n){var i=e,s=e,a=_o(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=_o();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(g){var _=o,p=s,m=_o();return(g||g===0)&&g!==i&&u(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:u,reset:d,getVelocity:f}},Qs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},If=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Xp=function(){mo=en.core.globals().ScrollTrigger,mo&&mo.core&&my()},Yp=function(e){return en=e||Gp(),!Ba&&en&&typeof document<"u"&&document.body&&(On=window,$i=document,ji=$i.documentElement,Ls=$i.body,Hp=[On,$i,ji,Ls],en.utils.clamp,Vp=en.core.context||function(){},Mr="onpointerenter"in Ls?"pointer":"mouse",kp=It.isTouch=On.matchMedia&&On.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in On||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ni=It.eventTypes=("ontouchstart"in ji?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ji?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Wp=0},500),Xp(),Ba=1),Ba};gn.op=Vt;tt.cache=0;var It=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ba||Yp(en)||console.warn("Please gsap.registerPlugin(Observer)"),mo||Xp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,E=n.onDrag,M=n.onPress,T=n.onRelease,C=n.onRight,w=n.onLeft,A=n.onUp,L=n.onDown,S=n.onChangeX,x=n.onChangeY,P=n.onChange,U=n.onToggleX,z=n.onToggleY,K=n.onHover,$=n.onHoverEnd,W=n.onMove,X=n.ignoreCheck,H=n.isNormalizer,oe=n.onGestureStart,D=n.onGestureEnd,ce=n.onWheel,ze=n.onEnable,Ye=n.onDisable,j=n.onClick,ee=n.scrollSpeed,he=n.capture,le=n.allowClicks,Ae=n.lockAxis,Re=n.onLockAxis;this.target=o=xn(o)||ji,this.vars=n,h&&(h=en.utils.toArray(h)),i=i||1e-9,s=s||0,g=g||1,ee=ee||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(On.getComputedStyle(Ls).lineHeight)||22);var We,Ze,I,Ie,Ue,Xe,ge,Y=this,we=0,Ne=0,R=n.passive||!u,y=ar(o,gn),q=ar(o,Vt),te=y(),ne=q(),J=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ni[0]==="pointerdown",Ee=go(o),re=o.ownerDocument||$i,ue=[0,0,0],De=[0,0,0],se=0,me=function(){return se=_o()},Pe=function(ve,Ke){return(Y.event=ve)&&h&&~h.indexOf(ve.target)||Ke&&J&&ve.pointerType!=="touch"||X&&X(ve,Ke)},ke=function(){Y._vx.reset(),Y._vy.reset(),Ze.pause(),d&&d(Y)},_e=function(){var ve=Y.deltaX=If(ue),Ke=Y.deltaY=If(De),ae=Math.abs(ve)>=i,Ve=Math.abs(Ke)>=i;P&&(ae||Ve)&&P(Y,ve,Ke,ue,De),ae&&(C&&Y.deltaX>0&&C(Y),w&&Y.deltaX<0&&w(Y),S&&S(Y),U&&Y.deltaX<0!=we<0&&U(Y),we=Y.deltaX,ue[0]=ue[1]=ue[2]=0),Ve&&(L&&Y.deltaY>0&&L(Y),A&&Y.deltaY<0&&A(Y),x&&x(Y),z&&Y.deltaY<0!=Ne<0&&z(Y),Ne=Y.deltaY,De[0]=De[1]=De[2]=0),(Ie||I)&&(W&&W(Y),I&&(E(Y),I=!1),Ie=!1),Xe&&!(Xe=!1)&&Re&&Re(Y),Ue&&(ce(Y),Ue=!1),We=0},Be=function(ve,Ke,ae){ue[ae]+=ve,De[ae]+=Ke,Y._vx.update(ve),Y._vy.update(Ke),c?We||(We=requestAnimationFrame(_e)):_e()},He=function(ve,Ke){Ae&&!ge&&(Y.axis=ge=Math.abs(ve)>Math.abs(Ke)?"x":"y",Xe=!0),ge!=="y"&&(ue[2]+=ve,Y._vx.update(ve,!0)),ge!=="x"&&(De[2]+=Ke,Y._vy.update(Ke,!0)),c?We||(We=requestAnimationFrame(_e)):_e()},at=function(ve){if(!Pe(ve,1)){ve=Qs(ve,u);var Ke=ve.clientX,ae=ve.clientY,Ve=Ke-Y.x,Ce=ae-Y.y,Ge=Y.isDragging;Y.x=Ke,Y.y=ae,(Ge||Math.abs(Y.startX-Ke)>=s||Math.abs(Y.startY-ae)>=s)&&(E&&(I=!0),Ge||(Y.isDragging=!0),He(Ve,Ce),Ge||p&&p(Y))}},v=Y.onPress=function(Te){Pe(Te,1)||Te&&Te.button||(Y.axis=ge=null,Ze.pause(),Y.isPressed=!0,Te=Qs(Te),we=Ne=0,Y.startX=Y.x=Te.clientX,Y.startY=Y.y=Te.clientY,Y._vx.reset(),Y._vy.reset(),hn(H?o:re,ni[1],at,R,!0),Y.deltaX=Y.deltaY=0,M&&M(Y))},N=Y.onRelease=function(Te){if(!Pe(Te,1)){cn(H?o:re,ni[1],at,!0);var ve=!isNaN(Y.y-Y.startY),Ke=Y.isDragging,ae=Ke&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Ve=Qs(Te);!ae&&ve&&(Y._vx.reset(),Y._vy.reset(),u&&le&&en.delayedCall(.08,function(){if(_o()-se>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(re.createEvent){var Ce=re.createEvent("MouseEvents");Ce.initMouseEvent("click",!0,!0,On,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(Ce)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,d&&Ke&&!H&&Ze.restart(!0),m&&Ke&&m(Y),T&&T(Y,ae)}},G=function(ve){return ve.touches&&ve.touches.length>1&&(Y.isGesturing=!0)&&oe(ve,Y.isDragging)},Z=function(){return(Y.isGesturing=!1)||D(Y)},Q=function(ve){if(!Pe(ve)){var Ke=y(),ae=q();Be((Ke-te)*ee,(ae-ne)*ee,1),te=Ke,ne=ae,d&&Ze.restart(!0)}},xe=function(ve){if(!Pe(ve)){ve=Qs(ve,u),ce&&(Ue=!0);var Ke=(ve.deltaMode===1?l:ve.deltaMode===2?On.innerHeight:1)*g;Be(ve.deltaX*Ke,ve.deltaY*Ke,0),d&&!H&&Ze.restart(!0)}},Oe=function(ve){if(!Pe(ve)){var Ke=ve.clientX,ae=ve.clientY,Ve=Ke-Y.x,Ce=ae-Y.y;Y.x=Ke,Y.y=ae,Ie=!0,d&&Ze.restart(!0),(Ve||Ce)&&He(Ve,Ce)}},pt=function(ve){Y.event=ve,K(Y)},ht=function(ve){Y.event=ve,$(Y)},Je=function(ve){return Pe(ve)||Qs(ve,u)&&j(Y)};Ze=Y._dc=en.delayedCall(f||.25,ke).pause(),Y.deltaX=Y.deltaY=0,Y._vx=fu(0,50,!0),Y._vy=fu(0,50,!0),Y.scrollX=y,Y.scrollY=q,Y.isDragging=Y.isGesturing=Y.isPressed=!1,Vp(this),Y.enable=function(Te){return Y.isEnabled||(hn(Ee?re:o,"scroll",hu),a.indexOf("scroll")>=0&&hn(Ee?re:o,"scroll",Q,R,he),a.indexOf("wheel")>=0&&hn(o,"wheel",xe,R,he),(a.indexOf("touch")>=0&&kp||a.indexOf("pointer")>=0)&&(hn(o,ni[0],v,R,he),hn(re,ni[2],N),hn(re,ni[3],N),le&&hn(o,"click",me,!0,!0),j&&hn(o,"click",Je),oe&&hn(re,"gesturestart",G),D&&hn(re,"gestureend",Z),K&&hn(o,Mr+"enter",pt),$&&hn(o,Mr+"leave",ht),W&&hn(o,Mr+"move",Oe)),Y.isEnabled=!0,Te&&Te.type&&v(Te),ze&&ze(Y)),Y},Y.disable=function(){Y.isEnabled&&(ys.filter(function(Te){return Te!==Y&&go(Te.target)}).length||cn(Ee?re:o,"scroll",hu),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),cn(H?o:re,ni[1],at,!0)),cn(Ee?re:o,"scroll",Q,he),cn(o,"wheel",xe,he),cn(o,ni[0],v,he),cn(re,ni[2],N),cn(re,ni[3],N),cn(o,"click",me,!0),cn(o,"click",Je),cn(re,"gesturestart",G),cn(re,"gestureend",Z),cn(o,Mr+"enter",pt),cn(o,Mr+"leave",ht),cn(o,Mr+"move",Oe),Y.isEnabled=Y.isPressed=Y.isDragging=!1,Ye&&Ye(Y))},Y.kill=Y.revert=function(){Y.disable();var Te=ys.indexOf(Y);Te>=0&&ys.splice(Te,1),Li===Y&&(Li=0)},ys.push(Y),H&&go(o)&&(Li=Y),Y.enable(_)},py(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();It.version="3.12.5";It.create=function(r){return new It(r)};It.register=Yp;It.getAll=function(){return ys.slice()};It.getById=function(r){return ys.filter(function(e){return e.vars.id===r})[0]};Gp()&&en.registerPlugin(It);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ye,gs,st,At,ii,Et,qp,ol,Io,vo,ro,va,rn,xl,du,pn,Uf,Nf,vs,Zp,cc,Kp,dn,pu,$p,jp,Wi,mu,eh,Ds,th,al,_u,uc,xa=1,sn=Date.now,hc=sn(),$n=0,so=0,Of=function(e,t,n){var i=In(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ff=function(e,t){return t&&(!In(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},_y=function r(){return so&&requestAnimationFrame(r)},Bf=function(){return xl=1},zf=function(){return xl=0},li=function(e){return e},oo=function(e){return Math.round(e*1e5)/1e5||0},Jp=function(){return typeof window<"u"},Qp=function(){return ye||Jp()&&(ye=window.gsap)&&ye.registerPlugin&&ye},Hr=function(e){return!!~qp.indexOf(e)},em=function(e){return(e==="Height"?th:st["inner"+e])||ii["client"+e]||Et["client"+e]},tm=function(e){return nr(e,"getBoundingClientRect")||(Hr(e)?function(){return Ga.width=st.innerWidth,Ga.height=th,Ga}:function(){return Ci(e)})},gy=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=nr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?em(s):e["client"+s])||0}},vy=function(e,t){return!t||~gi.indexOf(e)?tm(e):function(){return Ga}},pi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=nr(e,n))?a()-tm(e)()[s]:Hr(e)?(ii[n]||Et[n])-em(i):e[n]-e["offset"+i])},Ma=function(e,t){for(var n=0;n<vs.length;n+=3)(!t||~t.indexOf(vs[n+1]))&&e(vs[n],vs[n+1],vs[n+2])},In=function(e){return typeof e=="string"},vn=function(e){return typeof e=="function"},ao=function(e){return typeof e=="number"},Sr=function(e){return typeof e=="object"},eo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},fc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ps=Math.abs,nm="left",im="top",nh="right",ih="bottom",Ir="width",Ur="height",xo="Right",Mo="Left",So="Top",yo="Bottom",Ft="padding",Xn="margin",Ws="Width",rh="Height",Ht="px",Yn=function(e){return st.getComputedStyle(e)},xy=function(e){var t=Yn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},kf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ci=function(e,t){var n=t&&Yn(e)[du]!=="matrix(1, 0, 0, 1, 0, 0)"&&ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ll=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},rm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},My=function(e){return function(t){return ye.utils.snap(rm(e),t)}},sh=function(e){var t=ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},Sy=function(e){return function(t,n){return sh(rm(e))(t,n.direction)}},Sa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},qt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Yt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ya=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Hf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ea={toggleActions:"play",anticipatePin:0},cl={top:0,left:0,center:.5,bottom:1,right:1},za=function(e,t){if(In(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in cl?cl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ta=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,g=At.createElement("div"),_=Hr(n)||nr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?Et:n,E=e.indexOf("start")!==-1,M=E?c:u,T="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return T+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(T+=(i===Vt?nh:ih)+":"+(a+parseFloat(f))+"px;"),o&&(T+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=E,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=T,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],ka(g,0,i,E),g},ka=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ws]=1,s["border"+o+Ws]=0,s[n.p]=t+"px",ye.set(e,s)},et=[],gu={},Uo,Vf=function(){return sn()-$n>34&&(Uo||(Uo=requestAnimationFrame(Di)))},ms=function(){(!dn||!dn.isPressed||dn.startX>Et.clientWidth)&&(tt.cache++,dn?Uo||(Uo=requestAnimationFrame(Di)):Di(),$n||Gr("scrollStart"),$n=sn())},dc=function(){jp=st.innerWidth,$p=st.innerHeight},lo=function(){tt.cache++,!rn&&!Kp&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!pu||jp!==st.innerWidth||Math.abs(st.innerHeight-$p)>st.innerHeight*.25)&&ol.restart(!0)},Vr={},yy=[],sm=function r(){return Yt(it,"scrollEnd",r)||Cr(!0)},Gr=function(e){return Vr[e]&&Vr[e].map(function(t){return t()})||yy},Dn=[],om=function(e){for(var t=0;t<Dn.length;t+=5)(!e||Dn[t+4]&&Dn[t+4].query===e)&&(Dn[t].style.cssText=Dn[t+1],Dn[t].getBBox&&Dn[t].setAttribute("transform",Dn[t+2]||""),Dn[t+3].uncache=1)},oh=function(e,t){var n;for(pn=0;pn<et.length;pn++)n=et[pn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));al=!0,t&&om(t),t||Gr("revert")},am=function(e,t){tt.cache++,(t||!mn)&&tt.forEach(function(n){return vn(n)&&n.cacheID++&&(n.rec=0)}),In(e)&&(st.history.scrollRestoration=eh=e)},mn,Nr=0,Gf,Ey=function(){if(Gf!==Nr){var e=Gf=Nr;requestAnimationFrame(function(){return e===Nr&&Cr(!0)})}},lm=function(){Et.appendChild(Ds),th=!dn&&Ds.offsetHeight||st.innerHeight,Et.removeChild(Ds)},Wf=function(e){return Io(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Cr=function(e,t){if($n&&!e&&!al){qt(it,"scrollEnd",sm);return}lm(),mn=it.isRefreshing=!0,tt.forEach(function(i){return vn(i)&&++i.cacheID&&(i.rec=i())});var n=Gr("refreshInit");Zp&&it.sort(),t||oh(),tt.forEach(function(i){vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),al=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),_u=1,Wf(!0),et.forEach(function(i){var s=pi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Wf(!1),_u=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),tt.forEach(function(i){vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),am(eh,1),ol.pause(),Nr++,mn=2,Di(2),et.forEach(function(i){return vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),mn=it.isRefreshing=!1,Gr("refresh")},vu=0,Ha=1,Eo,Di=function(e){if(e===2||!mn&&!al){it.isUpdating=!0,Eo&&Eo.update(0);var t=et.length,n=sn(),i=n-hc>=50,s=t&&et[0].scroll();if(Ha=vu>s?-1:1,mn||(vu=s),i&&($n&&!xl&&n-$n>200&&($n=0,Gr("scrollEnd")),ro=hc,hc=n),Ha<0){for(pn=t;pn-- >0;)et[pn]&&et[pn].update(0,i);Ha=1}else for(pn=0;pn<t;pn++)et[pn]&&et[pn].update(0,i);it.isUpdating=!1}Uo=0},xu=[nm,im,ih,nh,Xn+yo,Xn+xo,Xn+So,Xn+Mo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Va=xu.concat([Ir,Ur,"boxSizing","max"+Ws,"max"+rh,"position",Xn,Ft,Ft+So,Ft+xo,Ft+yo,Ft+Mo]),Ty=function(e,t,n){Is(n);var i=e._gsap;if(i.spacerIsNative)Is(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},pc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=xu.length,a=t.style,o=e.style,l;s--;)l=xu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[ih]=o[nh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ir]=ll(e,gn)+Ht,a[Ur]=ll(e,Vt)+Ht,a[Ft]=o[Xn]=o[im]=o[nm]="0",Is(i),o[Ir]=o["max"+Ws]=n[Ir],o[Ur]=o["max"+rh]=n[Ur],o[Ft]=n[Ft],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},by=/([A-Z])/g,Is=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||ye.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(by,"-$1").toLowerCase())}},ba=function(e){for(var t=Va.length,n=e.style,i=[],s=0;s<t;s++)i.push(Va[s],n[Va[s]]);return i.t=e,i},Ay=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Ga={left:0,top:0},Xf=function(e,t,n,i,s,a,o,l,c,u,d,f,h,g){vn(e)&&(e=e(l)),In(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?za("0"+e.substr(3),n):0));var _=h?h.time():0,p,m,E;if(h&&h.seek(0),isNaN(e)||(e=+e),ao(e))h&&(e=ye.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&ka(o,n,i,!0);else{vn(t)&&(t=t(l));var M=(e||"0").split(" "),T,C,w,A;E=xn(t,l)||Et,T=Ci(E)||{},(!T||!T.left&&!T.top)&&Yn(E).display==="none"&&(A=E.style.display,E.style.display="block",T=Ci(E),A?E.style.display=A:E.style.removeProperty("display")),C=za(M[0],T[i.d]),w=za(M[1]||"0",n),e=T[i.p]-c[i.p]-u+C+s-w,o&&ka(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var L=e+n,S=a._isStart;p="scroll"+i.d2,ka(a,L,i,S&&L>20||!S&&(d?Math.max(Et[p],ii[p]):a.parentNode[p])<=L+1),d&&(c=Ci(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Ht))}return h&&E&&(p=Ci(E),h.seek(f),m=Ci(E),h._caScrollDist=p[i.p]-m[i.p],e=e/h._caScrollDist*f),h&&h.seek(_),h?e:Math.round(e)},wy=/(webkit|moz|length|cssText|inset)/i,Yf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===Et){e._stOrig=s.cssText,o=Yn(e);for(a in o)!+a&&!wy.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;ye.core.getCache(e).uncache=1,t.appendChild(e)}},cm=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=a,a}},Aa=function(e,t,n){var i={};i[t.p]="+="+n,ye.set(e,i)},qf=function(e,t){var n=ar(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var f=a.tween,h=l.onComplete,g={};c=c||n();var _=cm(n,c,function(){f.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){tt.cache++,a.tween&&Di()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=ye.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},qt(e,"wheel",n.wheelHandler),it.isTouch&&qt(e,"touchmove",n.wheelHandler),s},it=function(){function r(t,n){gs||r.register(ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!so){this.update=this.refresh=this.kill=li;return}n=kf(In(n)||ao(n)||n.nodeType?{trigger:n}:n,Ea);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,E=s.onSnapComplete,M=s.once,T=s.snap,C=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,L=s.fastScrollEnd,S=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?gn:Vt,P=!d&&d!==0,U=xn(n.scroller||st),z=ye.core.getCache(U),K=Hr(U),$=("pinType"in n?n.pinType:nr(U,"pinType")||K&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=P&&n.toggleActions.split(" "),H="markers"in n?n.markers:Ea.markers,oe=K?0:parseFloat(Yn(U)["border"+x.p2+Ws])||0,D=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(D)},ze=gy(U,K,x),Ye=vy(U,K),j=0,ee=0,he=0,le=ar(U,x),Ae,Re,We,Ze,I,Ie,Ue,Xe,ge,Y,we,Ne,R,y,q,te,ne,J,Ee,re,ue,De,se,me,Pe,ke,_e,Be,He,at,v,N,G,Z,Q,xe,Oe,pt,ht;if(D._startClamp=D._endClamp=!1,D._dir=x,p*=45,D.scroller=U,D.scroll=A?A.time.bind(A):le,Ze=le(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(Zp=1,n.refreshPriority===-9999&&(Eo=D)),z.tweenScroll=z.tweenScroll||{top:qf(U,Vt),left:qf(U,gn)},D.tweenTo=Ae=z.tweenScroll[x.p],D.scrubDuration=function(ae){G=ao(ae)&&ae,G?N?N.duration(ae):N=ye.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:G,paused:!0,onComplete:function(){return m&&m(D)}}):(N&&N.progress(1).kill(),N=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(d),at=0,l||(l=i.vars.id)),T&&((!Sr(T)||T.push)&&(T={snapTo:T}),"scrollBehavior"in Et.style&&ye.set(K?[Et,ii]:U,{scrollBehavior:"auto"}),tt.forEach(function(ae){return vn(ae)&&ae.target===(K?At.scrollingElement||ii:U)&&(ae.smooth=!1)}),We=vn(T.snapTo)?T.snapTo:T.snapTo==="labels"?My(i):T.snapTo==="labelsDirectional"?Sy(i):T.directional!==!1?function(ae,Ve){return sh(T.snapTo)(ae,sn()-ee<500?0:Ve.direction)}:ye.utils.snap(T.snapTo),Z=T.duration||{min:.1,max:2},Z=Sr(Z)?vo(Z.min,Z.max):vo(Z,Z),Q=ye.delayedCall(T.delay||G/2||.1,function(){var ae=le(),Ve=sn()-ee<500,Ce=Ae.tween;if((Ve||Math.abs(D.getVelocity())<10)&&!Ce&&!xl&&j!==ae){var Ge=(ae-Ie)/y,bt=i&&!P?i.totalProgress():Ge,Qe=Ve?0:(bt-v)/(sn()-ro)*1e3||0,vt=ye.utils.clamp(-Ge,1-Ge,ps(Qe/2)*Qe/.185),zt=Ge+(T.inertia===!1?0:vt),St,xt,ft=T,Cn=ft.onStart,b=ft.onInterrupt,O=ft.onComplete;if(St=We(zt,D),ao(St)||(St=zt),xt=Math.round(Ie+St*y),ae<=Ue&&ae>=Ie&&xt!==ae){if(Ce&&!Ce._initted&&Ce.data<=ps(xt-ae))return;T.inertia===!1&&(vt=St-Ge),Ae(xt,{duration:Z(ps(Math.max(ps(zt-bt),ps(St-bt))*.185/Qe/.05||0)),ease:T.ease||"power3",data:ps(xt-ae),onInterrupt:function(){return Q.restart(!0)&&b&&b(D)},onComplete:function(){D.update(),j=le(),i&&(N?N.resetTo("totalProgress",St,i._tTime/i._tDur):i.progress(St)),at=v=i&&!P?i.totalProgress():D.progress,E&&E(D),O&&O(D)}},ae,vt*y,xt-ae-vt*y),Cn&&Cn(D,Ae.tween)}}else D.isActive&&j!==ae&&Q.restart(!0)}).pause()),l&&(gu[l]=D),f=D.trigger=xn(f||h!==!0&&h),ht=f&&f._gsap&&f._gsap.stRevert,ht&&(ht=ht(D)),h=h===!0?f:xn(h),In(o)&&(o={targets:f,className:o}),h&&(g===!1||g===Xn||(g=!g&&h.parentNode&&h.parentNode.style&&Yn(h.parentNode).display==="flex"?!1:Ft),D.pin=h,Re=ye.core.getCache(h),Re.spacer?q=Re.pinState:(w&&(w=xn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Re.spacerIsNative=!!w,w&&(Re.spacerState=ba(w))),Re.spacer=J=w||At.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),Re.pinState=q=ba(h)),n.force3D!==!1&&ye.set(h,{force3D:!0}),D.spacer=J=Re.spacer,He=Yn(h),me=He[g+x.os2],re=ye.getProperty(h),ue=ye.quickSetter(h,x.a,Ht),pc(h,J,He),ne=ba(h)),H){Ne=Sr(H)?kf(H,Hf):Hf,Y=Ta("scroller-start",l,U,x,Ne,0),we=Ta("scroller-end",l,U,x,Ne,0,Y),Ee=Y["offset"+x.op.d2];var Je=xn(nr(U,"content")||U);Xe=this.markerStart=Ta("start",l,Je,x,Ne,Ee,0,A),ge=this.markerEnd=Ta("end",l,Je,x,Ne,Ee,0,A),A&&(pt=ye.quickSetter([Xe,ge],x.a,Ht)),!$&&!(gi.length&&nr(U,"fixedMarkers")===!0)&&(xy(K?Et:U),ye.set([Y,we],{force3D:!0}),ke=ye.quickSetter(Y,x.a,Ht),Be=ye.quickSetter(we,x.a,Ht))}if(A){var Te=A.vars.onUpdate,ve=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){D.update(0,0,1),Te&&Te.apply(A,ve||[])})}if(D.previous=function(){return et[et.indexOf(D)-1]},D.next=function(){return et[et.indexOf(D)+1]},D.revert=function(ae,Ve){if(!Ve)return D.kill(!0);var Ce=ae!==!1||!D.enabled,Ge=rn;Ce!==D.isReverted&&(Ce&&(xe=Math.max(le(),D.scroll.rec||0),he=D.progress,Oe=i&&i.progress()),Xe&&[Xe,ge,Y,we].forEach(function(bt){return bt.style.display=Ce?"none":"block"}),Ce&&(rn=D,D.update(Ce)),h&&(!C||!D.isActive)&&(Ce?Ty(h,J,q):pc(h,J,Yn(h),Pe)),Ce||D.update(Ce),rn=Ge,D.isReverted=Ce)},D.refresh=function(ae,Ve,Ce,Ge){if(!((rn||!D.enabled)&&!Ve)){if(h&&ae&&$n){qt(r,"scrollEnd",sm);return}!mn&&ce&&ce(D),rn=D,Ae.tween&&!Ce&&(Ae.tween.kill(),Ae.tween=0),N&&N.pause(),_&&i&&i.revert({kill:!1}).invalidate(),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var bt=ze(),Qe=Ye(),vt=A?A.duration():pi(U,x),zt=y<=.01,St=0,xt=Ge||0,ft=Sr(Ce)?Ce.end:n.end,Cn=n.endTrigger||f,b=Sr(Ce)?Ce.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),O=D.pinnedContainer=n.pinnedContainer&&xn(n.pinnedContainer,D),V=f&&Math.max(0,et.indexOf(D))||0,k=V,F,ie,fe,Se,de,Me,Le,Fe,lt,mt,ct,kt,rt;for(H&&Sr(Ce)&&(kt=ye.getProperty(Y,x.p),rt=ye.getProperty(we,x.p));k--;)Me=et[k],Me.end||Me.refresh(0,1)||(rn=D),Le=Me.pin,Le&&(Le===f||Le===h||Le===O)&&!Me.isReverted&&(mt||(mt=[]),mt.unshift(Me),Me.revert(!0,!0)),Me!==et[k]&&(V--,k--);for(vn(b)&&(b=b(D)),b=Of(b,"start",D),Ie=Xf(b,f,bt,x,le(),Xe,Y,D,Qe,oe,$,vt,A,D._startClamp&&"_startClamp")||(h?-.001:0),vn(ft)&&(ft=ft(D)),In(ft)&&!ft.indexOf("+=")&&(~ft.indexOf(" ")?ft=(In(b)?b.split(" ")[0]:"")+ft:(St=za(ft.substr(2),bt),ft=In(b)?b:(A?ye.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Ie):Ie)+St,Cn=f)),ft=Of(ft,"end",D),Ue=Math.max(Ie,Xf(ft||(Cn?"100% 0":vt),Cn,bt,x,le()+St,ge,we,D,Qe,oe,$,vt,A,D._endClamp&&"_endClamp"))||-.001,St=0,k=V;k--;)Me=et[k],Le=Me.pin,Le&&Me.start-Me._pinPush<=Ie&&!A&&Me.end>0&&(F=Me.end-(D._startClamp?Math.max(0,Me.start):Me.start),(Le===f&&Me.start-Me._pinPush<Ie||Le===O)&&isNaN(b)&&(St+=F*(1-Me.progress)),Le===h&&(xt+=F));if(Ie+=St,Ue+=St,D._startClamp&&(D._startClamp+=St),D._endClamp&&!mn&&(D._endClamp=Ue||-.001,Ue=Math.min(Ue,pi(U,x))),y=Ue-Ie||(Ie-=.01)&&.001,zt&&(he=ye.utils.clamp(0,1,ye.utils.normalize(Ie,Ue,xe))),D._pinPush=xt,Xe&&St&&(F={},F[x.a]="+="+St,O&&(F[x.p]="-="+le()),ye.set([Xe,ge],F)),h&&!(_u&&D.end>=pi(U,x)))F=Yn(h),Se=x===Vt,fe=le(),De=parseFloat(re(x.a))+xt,!vt&&Ue>1&&(ct=(K?At.scrollingElement||ii:U).style,ct={style:ct,value:ct["overflow"+x.a.toUpperCase()]},K&&Yn(Et)["overflow"+x.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+x.a.toUpperCase()]="scroll")),pc(h,J,F),ne=ba(h),ie=Ci(h,!0),Fe=$&&ar(U,Se?gn:Vt)(),g?(Pe=[g+x.os2,y+xt+Ht],Pe.t=J,k=g===Ft?ll(h,x)+y+xt:0,k&&(Pe.push(x.d,k+Ht),J.style.flexBasis!=="auto"&&(J.style.flexBasis=k+Ht)),Is(Pe),O&&et.forEach(function(be){be.pin===O&&be.vars.pinSpacing!==!1&&(be._subPinOffset=!0)}),$&&le(xe)):(k=ll(h,x),k&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=k+Ht)),$&&(de={top:ie.top+(Se?fe-Ie:Fe)+Ht,left:ie.left+(Se?Fe:fe-Ie)+Ht,boxSizing:"border-box",position:"fixed"},de[Ir]=de["max"+Ws]=Math.ceil(ie.width)+Ht,de[Ur]=de["max"+rh]=Math.ceil(ie.height)+Ht,de[Xn]=de[Xn+So]=de[Xn+xo]=de[Xn+yo]=de[Xn+Mo]="0",de[Ft]=F[Ft],de[Ft+So]=F[Ft+So],de[Ft+xo]=F[Ft+xo],de[Ft+yo]=F[Ft+yo],de[Ft+Mo]=F[Ft+Mo],te=Ay(q,de,C),mn&&le(0)),i?(lt=i._initted,cc(1),i.render(i.duration(),!0,!0),se=re(x.a)-De+y+xt,_e=Math.abs(y-se)>1,$&&_e&&te.splice(te.length-2,2),i.render(0,!0,!0),lt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),cc(0)):se=y,ct&&(ct.value?ct.style["overflow"+x.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+x.a));else if(f&&le()&&!A)for(ie=f.parentNode;ie&&ie!==Et;)ie._pinOffset&&(Ie-=ie._pinOffset,Ue-=ie._pinOffset),ie=ie.parentNode;mt&&mt.forEach(function(be){return be.revert(!1,!0)}),D.start=Ie,D.end=Ue,Ze=I=mn?xe:le(),!A&&!mn&&(Ze<xe&&le(xe),D.scroll.rec=0),D.revert(!1,!0),ee=sn(),Q&&(j=-1,Q.restart(!0)),rn=0,i&&P&&(i._initted||Oe)&&i.progress()!==Oe&&i.progress(Oe||0,!0).render(i.time(),!0,!0),(zt||he!==D.progress||A||_)&&(i&&!P&&i.totalProgress(A&&Ie<-.001&&!he?ye.utils.normalize(Ie,Ue,0):he,!0),D.progress=zt||(Ze-Ie)/y===he?0:he),h&&g&&(J._pinOffset=Math.round(D.progress*se)),N&&N.invalidate(),isNaN(kt)||(kt-=ye.getProperty(Y,x.p),rt-=ye.getProperty(we,x.p),Aa(Y,x,kt),Aa(Xe,x,kt-(Ge||0)),Aa(we,x,rt),Aa(ge,x,rt-(Ge||0))),zt&&!mn&&D.update(),u&&!mn&&!R&&(R=!0,u(D),R=!1)}},D.getVelocity=function(){return(le()-I)/(sn()-ro)*1e3||0},D.endAnimation=function(){eo(D.callbackAnimation),i&&(N?N.progress(1):i.paused()?P||eo(i,D.direction<0,1):eo(i,i.reversed()))},D.labelToScroll=function(ae){return i&&i.labels&&(Ie||D.refresh()||Ie)+i.labels[ae]/i.duration()*y||0},D.getTrailing=function(ae){var Ve=et.indexOf(D),Ce=D.direction>0?et.slice(0,Ve).reverse():et.slice(Ve+1);return(In(ae)?Ce.filter(function(Ge){return Ge.vars.preventOverlaps===ae}):Ce).filter(function(Ge){return D.direction>0?Ge.end<=Ie:Ge.start>=Ue})},D.update=function(ae,Ve,Ce){if(!(A&&!Ce&&!ae)){var Ge=mn===!0?xe:D.scroll(),bt=ae?0:(Ge-Ie)/y,Qe=bt<0?0:bt>1?1:bt||0,vt=D.progress,zt,St,xt,ft,Cn,b,O,V;if(Ve&&(I=Ze,Ze=A?le():Ge,T&&(v=at,at=i&&!P?i.totalProgress():Qe)),p&&h&&!rn&&!xa&&$n&&(!Qe&&Ie<Ge+(Ge-I)/(sn()-ro)*p?Qe=1e-4:Qe===1&&Ue>Ge+(Ge-I)/(sn()-ro)*p&&(Qe=.9999)),Qe!==vt&&D.enabled){if(zt=D.isActive=!!Qe&&Qe<1,St=!!vt&&vt<1,b=zt!==St,Cn=b||!!Qe!=!!vt,D.direction=Qe>vt?1:-1,D.progress=Qe,Cn&&!rn&&(xt=Qe&&!vt?0:Qe===1?1:vt===1?2:3,P&&(ft=!b&&X[xt+1]!=="none"&&X[xt+1]||X[xt],V=i&&(ft==="complete"||ft==="reset"||ft in i))),S&&(b||V)&&(V||d||!i)&&(vn(S)?S(D):D.getTrailing(S).forEach(function(fe){return fe.endAnimation()})),P||(N&&!rn&&!xa?(N._dp._time-N._start!==N._time&&N.render(N._dp._time-N._start),N.resetTo?N.resetTo("totalProgress",Qe,i._tTime/i._tDur):(N.vars.totalProgress=Qe,N.invalidate().restart())):i&&i.totalProgress(Qe,!!(rn&&(ee||ae)))),h){if(ae&&g&&(J.style[g+x.os2]=me),!$)ue(oo(De+se*Qe));else if(Cn){if(O=!ae&&Qe>vt&&Ue+1>Ge&&Ge+1>=pi(U,x),C)if(!ae&&(zt||O)){var k=Ci(h,!0),F=Ge-Ie;Yf(h,Et,k.top+(x===Vt?F:0)+Ht,k.left+(x===Vt?0:F)+Ht)}else Yf(h,J);Is(zt||O?te:ne),_e&&Qe<1&&zt||ue(De+(Qe===1&&!O?se:0))}}T&&!Ae.tween&&!rn&&!xa&&Q.restart(!0),o&&(b||M&&Qe&&(Qe<1||!uc))&&Io(o.targets).forEach(function(fe){return fe.classList[zt||M?"add":"remove"](o.className)}),a&&!P&&!ae&&a(D),Cn&&!rn?(P&&(V&&(ft==="complete"?i.pause().totalProgress(1):ft==="reset"?i.restart(!0).pause():ft==="restart"?i.restart(!0):i[ft]()),a&&a(D)),(b||!uc)&&(c&&b&&fc(D,c),W[xt]&&fc(D,W[xt]),M&&(Qe===1?D.kill(!1,1):W[xt]=0),b||(xt=Qe===1?1:3,W[xt]&&fc(D,W[xt]))),L&&!zt&&Math.abs(D.getVelocity())>(ao(L)?L:2500)&&(eo(D.callbackAnimation),N?N.progress(1):eo(i,ft==="reverse"?1:!Qe,1))):P&&a&&!rn&&a(D)}if(Be){var ie=A?Ge/A.duration()*(A._caScrollDist||0):Ge;ke(ie+(Y._isFlipped?1:0)),Be(ie)}pt&&pt(-Ge/A.duration()*(A._caScrollDist||0))}},D.enable=function(ae,Ve){D.enabled||(D.enabled=!0,qt(U,"resize",lo),K||qt(U,"scroll",ms),ce&&qt(r,"refreshInit",ce),ae!==!1&&(D.progress=he=0,Ze=I=j=le()),Ve!==!1&&D.refresh())},D.getTween=function(ae){return ae&&Ae?Ae.tween:N},D.setPositions=function(ae,Ve,Ce,Ge){if(A){var bt=A.scrollTrigger,Qe=A.duration(),vt=bt.end-bt.start;ae=bt.start+vt*ae/Qe,Ve=bt.start+vt*Ve/Qe}D.refresh(!1,!1,{start:Ff(ae,Ce&&!!D._startClamp),end:Ff(Ve,Ce&&!!D._endClamp)},Ge),D.update()},D.adjustPinSpacing=function(ae){if(Pe&&ae){var Ve=Pe.indexOf(x.d)+1;Pe[Ve]=parseFloat(Pe[Ve])+ae+Ht,Pe[1]=parseFloat(Pe[1])+ae+Ht,Is(Pe)}},D.disable=function(ae,Ve){if(D.enabled&&(ae!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,Ve||N&&N.pause(),xe=0,Re&&(Re.uncache=1),ce&&Yt(r,"refreshInit",ce),Q&&(Q.pause(),Ae.tween&&Ae.tween.kill()&&(Ae.tween=0)),!K)){for(var Ce=et.length;Ce--;)if(et[Ce].scroller===U&&et[Ce]!==D)return;Yt(U,"resize",lo),K||Yt(U,"scroll",ms)}},D.kill=function(ae,Ve){D.disable(ae,Ve),N&&!Ve&&N.kill(),l&&delete gu[l];var Ce=et.indexOf(D);Ce>=0&&et.splice(Ce,1),Ce===pn&&Ha>0&&pn--,Ce=0,et.forEach(function(Ge){return Ge.scroller===D.scroller&&(Ce=1)}),Ce||mn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,ae&&i.revert({kill:!1}),Ve||i.kill()),Xe&&[Xe,ge,Y,we].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),Eo===D&&(Eo=0),h&&(Re&&(Re.uncache=1),Ce=0,et.forEach(function(Ge){return Ge.pin===h&&Ce++}),Ce||(Re.spacer=0)),n.onKill&&n.onKill(D)},et.push(D),D.enable(!1,!1),ht&&ht(D),i&&i.add&&!y){var Ke=D.update;D.update=function(){D.update=Ke,Ie||Ue||D.refresh()},ye.delayedCall(.01,D.update),y=.01,Ie=Ue=0}else D.refresh();h&&Ey()},r.register=function(n){return gs||(ye=n||Qp(),Jp()&&window.document&&r.enable(),gs=so),gs},r.defaults=function(n){if(n)for(var i in n)Ea[i]=n[i];return Ea},r.disable=function(n,i){so=0,et.forEach(function(a){return a[i?"kill":"disable"](n)}),Yt(st,"wheel",ms),Yt(At,"scroll",ms),clearInterval(va),Yt(At,"touchcancel",li),Yt(Et,"touchstart",li),Sa(Yt,At,"pointerdown,touchstart,mousedown",Bf),Sa(Yt,At,"pointerup,touchend,mouseup",zf),ol.kill(),Ma(Yt);for(var s=0;s<tt.length;s+=3)ya(Yt,tt[s],tt[s+1]),ya(Yt,tt[s],tt[s+2])},r.enable=function(){if(st=window,At=document,ii=At.documentElement,Et=At.body,ye&&(Io=ye.utils.toArray,vo=ye.utils.clamp,mu=ye.core.context||li,cc=ye.core.suppressOverwrites||li,eh=st.history.scrollRestoration||"auto",vu=st.pageYOffset,ye.core.globals("ScrollTrigger",r),Et)){so=1,Ds=document.createElement("div"),Ds.style.height="100vh",Ds.style.position="absolute",lm(),_y(),It.register(ye),r.isTouch=It.isTouch,Wi=It.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pu=It.isTouch===1,qt(st,"wheel",ms),qp=[st,At,ii,Et],ye.matchMedia?(r.matchMedia=function(l){var c=ye.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},ye.addEventListener("matchMediaInit",function(){return oh()}),ye.addEventListener("matchMediaRevert",function(){return om()}),ye.addEventListener("matchMedia",function(){Cr(0,1),Gr("matchMedia")}),ye.matchMedia("(orientation: portrait)",function(){return dc(),dc})):console.warn("Requires GSAP 3.11.0 or later"),dc(),qt(At,"scroll",ms);var n=Et.style,i=n.borderTopStyle,s=ye.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Ci(Et),Vt.m=Math.round(a.top+Vt.sc())||0,gn.m=Math.round(a.left+gn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),va=setInterval(Vf,250),ye.delayedCall(.5,function(){return xa=0}),qt(At,"touchcancel",li),qt(Et,"touchstart",li),Sa(qt,At,"pointerdown,touchstart,mousedown",Bf),Sa(qt,At,"pointerup,touchend,mouseup",zf),du=ye.utils.checkPrefix("transform"),Va.push(du),gs=sn(),ol=ye.delayedCall(.2,Cr).pause(),vs=[At,"visibilitychange",function(){var l=st.innerWidth,c=st.innerHeight;At.hidden?(Uf=l,Nf=c):(Uf!==l||Nf!==c)&&lo()},At,"DOMContentLoaded",Cr,st,"load",Cr,st,"resize",lo],Ma(qt),et.forEach(function(l){return l.enable(0,1)}),o=0;o<tt.length;o+=3)ya(Yt,tt[o],tt[o+1]),ya(Yt,tt[o],tt[o+2])}},r.config=function(n){"limitCallbacks"in n&&(uc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(va)||(va=i)&&setInterval(Vf,i),"ignoreMobileResize"in n&&(pu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ma(Yt)||Ma(qt,n.autoRefreshEvents||"none"),Kp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=xn(n),a=tt.indexOf(s),o=Hr(s);~a&&tt.splice(a,o?6:2),i&&(o?gi.unshift(st,i,Et,i,ii,i):gi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(In(n)?xn(n):n).getBoundingClientRect(),o=a[s?Ir:Ur]*i||0;return s?a.right-o>0&&a.left+o<st.innerWidth:a.bottom-o>0&&a.top+o<st.innerHeight},r.positionInViewport=function(n,i,s){In(n)&&(n=xn(n));var a=n.getBoundingClientRect(),o=a[s?Ir:Ur],l=i==null?o/2:i in cl?cl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/st.innerWidth:(a.top+l)/st.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Vr.killAll||[];Vr={},i.forEach(function(s){return s()})}},r}();it.version="3.12.5";it.saveStyles=function(r){return r?Io(r).forEach(function(e){if(e&&e.style){var t=Dn.indexOf(e);t>=0&&Dn.splice(t,5),Dn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ye.core.getCache(e),mu())}}):Dn};it.revert=function(r,e){return oh(!r,e)};it.create=function(r,e){return new it(r,e)};it.refresh=function(r){return r?lo():(gs||it.register())&&Cr(!0)};it.update=function(r){return++tt.cache&&Di(r===!0?2:0)};it.clearScrollMemory=am;it.maxScroll=function(r,e){return pi(r,e?gn:Vt)};it.getScrollFunc=function(r,e){return ar(xn(r),e?gn:Vt)};it.getById=function(r){return gu[r]};it.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!$n};it.snapDirectional=sh;it.addEventListener=function(r,e){var t=Vr[r]||(Vr[r]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(r,e){var t=Vr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],f=[],h=ye.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(g){d.length||h.restart(!0),d.push(g.trigger),f.push(g),s<=d.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&vn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return vn(s)&&(s=s(),qt(it,"refresh",function(){return s=e.batchMax()})),Io(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(it.create(c))}),t};var Zf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},mc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(It.isTouch?" pinch-zoom":""):"none",e===ii&&r(Et,t)},wa={auto:1,scroll:1},Cy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||ye.core.getCache(s),o=sn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Et&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(wa[(l=Yn(s)).overflowY]||wa[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Hr(s)&&(wa[(l=Yn(s)).overflowY]||wa[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},um=function(e,t,n,i){return It.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Cy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&qt(At,It.eventTypes[0],$f,!1,!0)},onDisable:function(){return Yt(At,It.eventTypes[0],$f,!0)}})},Ry=/(input|label|select|textarea)/i,Kf,$f=function(e){var t=Ry.test(e.target.tagName);(t||Kf)&&(e._gsapAllow=!0,Kf=t)},Py=function(e){Sr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=xn(e.target)||ii,u=ye.core.globals().ScrollSmoother,d=u&&u.get(),f=Wi&&(e.content&&xn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=ar(c,Vt),g=ar(c,gn),_=1,p=(It.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,m=0,E=vn(i)?function(){return i(o)}:function(){return i||2.8},M,T,C=um(c,e.type,!0,s),w=function(){return T=!1},A=li,L=li,S=function(){l=pi(c,Vt),L=vo(Wi?1:0,l),n&&(A=vo(0,pi(c,gn))),M=Nr},x=function(){f._gsap.y=oo(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},P=function(){if(T){requestAnimationFrame(w);var H=oo(o.deltaY/2),oe=L(h.v-H);if(f&&oe!==h.v+h.offset){h.offset=oe-h.v;var D=oo((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",h.cacheID=tt.cache,Di()}return!0}h.offset&&x(),T=!0},U,z,K,$,W=function(){S(),U.isActive()&&U.vars.scrollY>l&&(h()>l?U.progress(1)&&h(l):U.resetTo("scrollY",l))};return f&&ye.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return Wi&&X.type==="touchmove"&&P()||_>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){T=!1;var X=_;_=oo((st.visualViewport&&st.visualViewport.scale||1)/p),U.pause(),X!==_&&mc(c,_>1.01?!0:n?!1:"x"),z=g(),K=h(),S(),M=Nr},e.onRelease=e.onGestureStart=function(X,H){if(h.offset&&x(),!H)$.restart(!0);else{tt.cache++;var oe=E(),D,ce;n&&(D=g(),ce=D+oe*.05*-X.velocityX/.227,oe*=Zf(g,D,ce,pi(c,gn)),U.vars.scrollX=A(ce)),D=h(),ce=D+oe*.05*-X.velocityY/.227,oe*=Zf(h,D,ce,pi(c,Vt)),U.vars.scrollY=L(ce),U.invalidate().duration(oe).play(.01),(Wi&&U.vars.scrollY>=l||D>=l-1)&&ye.to({},{onUpdate:W,duration:oe})}a&&a(X)},e.onWheel=function(){U._ts&&U.pause(),sn()-m>1e3&&(M=0,m=sn())},e.onChange=function(X,H,oe,D,ce){if(Nr!==M&&S(),H&&n&&g(A(D[2]===H?z+(X.startX-X.x):g()+H-D[1])),oe){h.offset&&x();var ze=ce[2]===oe,Ye=ze?K+X.startY-X.y:h()+oe-ce[1],j=L(Ye);ze&&Ye!==j&&(K+=j-Ye),h(j)}(oe||H)&&Di()},e.onEnable=function(){mc(c,n?!1:"x"),it.addEventListener("refresh",W),qt(st,"resize",W),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){mc(c,!0),Yt(st,"resize",W),it.removeEventListener("refresh",W),C.kill()},e.lockAxis=e.lockAxis!==!1,o=new It(e),o.iOS=Wi,Wi&&!h()&&h(1),Wi&&ye.ticker.add(li),$=o._dc,U=ye.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:cm(h,h(),function(){return U.pause()})},onUpdate:Di,onComplete:$.vars.onComplete}),o};it.sort=function(r){return et.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};it.observe=function(r){return new It(r)};it.normalizeScroll=function(r){if(typeof r>"u")return dn;if(r===!0&&dn)return dn.enable();if(r===!1){dn&&dn.kill(),dn=r;return}var e=r instanceof It?r:Py(r);return dn&&dn.target===e.target&&dn.kill(),Hr(e.target)&&(dn=e),e};it.core={_getVelocityProp:fu,_inputObserver:um,_scrollers:tt,_proxies:gi,bridge:{ss:function(){$n||Gr("scrollStart"),$n=sn()},ref:function(){return rn}}};Qp()&&ye.registerPlugin(it);class Ly{constructor(){this.experience=new Wr,this.scene=this.experience.scene,this.time=this.experience.time,this.camera=this.experience.camera,this.room=this.experience.room,Tr.registerPlugin(it),this.progress=0,this.dummyCurve=new B(0,0,0),this.lerp={current:0,target:0,ease:.1},this.position=new B(0,0,0),this.lookAtPosition=new B(0,0,0),this.setPath(),this.onWheel()}setPath(){this.curve=new OM([new B(0,0,-5),new B(5,12,0),new B(0,5,5),new B(15,0,5),new B(0,5,5),new B(-12,6,5)],!0),this.timeline=new Tr.timeline,this.timeline.to(this.room.torus.position,{x:5,duration:20})}showPath(){const e=this.curve.getPoints(50),t=new kn().setFromPoints(e),n=new zo({color:16711680}),i=new Ld(t,n);this.scene.add(i)}onWheel(){window.addEventListener("wheel",e=>{e.deltaY>0?this.lerp.target+=.01:this.lerp.target-=.01})}resize(){}update(){this.lerp.current=Tr.utils.interpolate(this.lerp.current,this.lerp.target,this.lerp.ease),this.lerp.target=Tr.utils.clamp(0,1,this.lerp.target),this.lerp.current=Tr.utils.clamp(0,1,this.lerp.current),this.curve.getPointAt(this.lerp.current,this.position),this.camera.orthographicCamera.position.copy(this.position),this.camera.orthographicCamera.lookAt(0,0,0)}}const Es=class Es{constructor(e){if(Es.instance)return Es.instance;Es.instance=this,this.canvas=e,this.scene=new UM,this.sizes=new YM,this.time=new qM,this.camera=new $M,this.renderer=new jM,this.room=new fy,this.controls=new Ly,this.time.on("update",()=>{this.update()}),this.sizes.on("resize",()=>{this.resize()})}update(){this.camera.update(),this.renderer.update(),this.room.update(),this.controls.update()}resize(){this.camera.resize(),this.renderer.resize()}};lh(Es,"instance");let Wr=Es;new Wr(document.querySelector(".experience-canvas"));window.addEventListener("load",function(r){let e=document.getElementsByClassName("en");for(let t=0;t<e.length;t++)e[t].style.display="none"});document.querySelectorAll(".button-en").forEach(function(r){r.addEventListener("click",function(e){let t=document.getElementsByClassName("en");for(let i=0;i<t.length;i++)t[i].style.display="revert";let n=document.getElementsByClassName("fr");for(let i=0;i<n.length;i++)n[i].style.display="none"})});document.querySelectorAll(".button-fr").forEach(function(r){r.addEventListener("click",function(e){let t=document.getElementsByClassName("fr");for(let i=0;i<t.length;i++)t[i].style.display="revert";let n=document.getElementsByClassName("en");for(let i=0;i<n.length;i++)n[i].style.display="none"})});
