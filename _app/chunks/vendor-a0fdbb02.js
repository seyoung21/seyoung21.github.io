function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let a;function l(t,n){return a||(a=document.createElement("a")),a.href=n,t===a.href}function u(t,n,e,o){if(t){const r=s(t,n,e,o);return t[0](r)}}function s(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function d(t,n,e,o,r,i){if(r){const c=s(n,e,o,i);t.p(c,r)}}function h(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}let _,m=!1;function p(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function g(t,n){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=n[l].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:p(1,r,(t=>n[e[t]].claim_order),t))-1;o[l]=e[i]+1;const c=i+1;e[c]=l,r=Math.max(c,r)}const i=[],c=[];let a=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);a>=l;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,u=0;l<c.length;l++){for(;u<i.length&&c[l].claim_order>=i[u].claim_order;)u++;const n=u<i.length?i[u]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function $(t,n,e){m&&!e?g(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function y(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function E(){return b("")}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function A(t,n,e){n in t?t[n]="boolean"==typeof t[n]&&""===e||e:w(t,n,e)}function k(t){return Array.from(t.childNodes)}function N(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function S(t,n,e){return function(t,n,e,o){return N(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}(t,n,e,x)}function j(t,n){return N(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>b(n)),!0)}function z(t){return j(t," ")}function B(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function C(t,n=document.body){return Array.from(n.querySelectorAll(t))}function T(t){_=t}function q(){if(!_)throw new Error("Function called outside component initialization");return _}function I(t){q().$$.on_mount.push(t)}function M(t){q().$$.after_update.push(t)}function O(t,n){q().$$.context.set(t,n)}const D=[],F=[],H=[],G=[],J=Promise.resolve();let K=!1;function L(t){H.push(t)}let P=!1;const W=new Set;function Q(){if(!P){P=!0;do{for(let t=0;t<D.length;t+=1){const n=D[t];T(n),R(n.$$)}for(T(null),D.length=0;F.length;)F.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];W.has(n)||(W.add(n),n())}H.length=0}while(D.length);for(;G.length;)G.pop()();K=!1,P=!1,W.clear()}}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const U=new Set;let V;function X(){V={r:0,c:[],p:V}}function Y(){V.r||r(V.c),V=V.p}function Z(t,n){t&&t.i&&(U.delete(t),t.i(n))}function tt(t,n,e,o){if(t&&t.o){if(U.has(t))return;U.add(t),V.c.push((()=>{U.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function nt(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function et(t){return"object"==typeof t&&null!==t?t:{}}function ot(t){t&&t.c()}function rt(t,n){t&&t.l(n)}function it(t,n,o,c){const{fragment:a,on_mount:l,on_destroy:u,after_update:s}=t.$$;a&&a.m(n,o),c||L((()=>{const n=l.map(e).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]})),s.forEach(L)}function ct(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function at(t,n){-1===t.$$.dirty[0]&&(D.push(t),K||(K=!0,J.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function lt(n,e,i,c,a,l,u,s=[-1]){const f=_;T(n);const d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:s,skip_bound:!1,root:e.target||f.$$.root};u&&u(d.root);let h=!1;if(d.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&at(n,t)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){m=!0;const t=k(e.target);d.fragment&&d.fragment.l(t),t.forEach(y)}else d.fragment&&d.fragment.c();e.intro&&Z(n.$$.fragment),it(n,e.target,e.anchor,e.customElement),m=!1,Q()}T(f)}class ut{$destroy(){ct(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function ft(n,e=t){let o;const r=new Set;function i(t){if(c(n,t)&&(n=t,o)){const t=!st.length;for(const e of r)e[1](),st.push(e,n);if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,a=t){const l=[c,a];return r.add(l),1===r.size&&(o=e(i)||t),c(n),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}export{I as A,n as B,ft as C,u as D,d as E,h as F,f as G,g as H,t as I,l as J,A as K,C as L,ut as S,k as a,w as b,S as c,y as d,x as e,$ as f,j as g,B as h,lt as i,ot as j,v as k,E as l,rt as m,z as n,it as o,nt as p,et as q,X as r,c as s,b as t,tt as u,ct as v,Y as w,Z as x,O as y,M as z};
