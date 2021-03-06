// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14TextPaintStyleC1ENS_10ColorSpaceE;
var __ZN7WebCore14TextPaintStyleC1ENS_5ColorENS_10ColorSpaceE;
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore30computeTextSelectionPaintStyleERKNS_14TextPaintStyleERKNS_10RenderTextERKNS_11RenderStyleERKNS_9PaintInfoERbSC_RPKNS_10ShadowDataE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 HEAP8[i6] = (HEAP32[i5 + 20 >> 2] | 0) == 8 | 0;
 HEAP8[i7] = 0;
 i13 = i5 + 24 | 0;
 if ((HEAP32[i13 >> 2] & 2 | 0) == 0) {
  i14 = HEAP32[(HEAP32[i4 + 24 >> 2] | 0) + 60 >> 2] | 0;
 } else {
  i14 = 0;
 }
 HEAP32[i8 >> 2] = i14;
 _memcpy(i1 | 0, i2 | 0, 32) | 0;
 if ((HEAP32[i13 >> 2] & 2 | 0) == 0) {
  __ZNK7WebCore12RenderObject24selectionForegroundColorEv(i10, i3 | 0);
  if ((HEAP8[i10 + 4 | 0] & 1) != 0) {
   i15 = 6;
  }
 } else {
  HEAP32[i10 >> 2] = -16777216;
  HEAP8[i10 + 4 | 0] = 1;
  i15 = 6;
 }
 do {
  if ((i15 | 0) == 6) {
   i2 = i1 + 4 | 0;
   if ((HEAP32[i10 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
    if ((HEAP8[i1 + 8 | 0] & 1) != 0) {
     break;
    }
   }
   if ((HEAP8[i6] & 1) == 0) {
    HEAP8[i7] = 1;
   }
   i14 = i2;
   i2 = i10;
   HEAP32[i14 >> 2] = HEAP32[i2 >> 2];
   HEAP8[i14 + 4 | 0] = HEAP8[i2 + 4 | 0] | 0;
  }
 } while (0);
 if ((HEAP32[i13 >> 2] & 2 | 0) == 0) {
  __ZNK7WebCore12RenderObject26selectionEmphasisMarkColorEv(i11, i3 | 0);
  if ((HEAP8[i11 + 4 | 0] & 1) != 0) {
   i15 = 14;
  }
 } else {
  HEAP32[i11 >> 2] = -16777216;
  HEAP8[i11 + 4 | 0] = 1;
  i15 = 14;
 }
 do {
  if ((i15 | 0) == 14) {
   i10 = i1 + 20 | 0;
   if ((HEAP32[i11 >> 2] | 0) == (HEAP32[i10 >> 2] | 0)) {
    if ((HEAP8[i1 + 24 | 0] & 1) != 0) {
     break;
    }
   }
   if ((HEAP8[i6] & 1) == 0) {
    HEAP8[i7] = 1;
   }
   i2 = i10;
   i10 = i11;
   HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
   HEAP8[i2 + 4 | 0] = HEAP8[i10 + 4 | 0] | 0;
  }
 } while (0);
 i11 = __ZNK7WebCore12RenderObject20getCachedPseudoStyleENS_8PseudoIdEPNS_11RenderStyleE(i3 | 0, 5, 0) | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 if ((HEAP32[i13 >> 2] & 2 | 0) == 0) {
  i16 = HEAP32[(HEAP32[i11 + 24 >> 2] | 0) + 60 >> 2] | 0;
 } else {
  i16 = 0;
 }
 if ((i16 | 0) != (HEAP32[i8 >> 2] | 0)) {
  if ((HEAP8[i6] & 1) == 0) {
   HEAP8[i7] = 1;
  }
  HEAP32[i8 >> 2] = i16;
 }
 d17 = +HEAPF32[(HEAP32[i11 + 24 >> 2] | 0) + 16 >> 2];
 i16 = i1 + 28 | 0;
 if (d17 != +HEAPF32[i16 >> 2]) {
  if ((HEAP8[i6] & 1) == 0) {
   HEAP8[i7] = 1;
  }
  HEAPF32[i16 >> 2] = d17;
 }
 if ((HEAP32[i13 >> 2] & 2 | 0) == 0) {
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i12, i11, 343);
  i18 = HEAP32[i12 >> 2] | 0;
 } else {
  HEAP32[i12 >> 2] = -16777216;
  HEAP8[i12 + 4 | 0] = 1;
  i18 = -16777216;
 }
 i11 = i1 + 12 | 0;
 do {
  if ((i18 | 0) == (HEAP32[i11 >> 2] | 0)) {
   if ((HEAP8[i12 + 4 | 0] & 1) != 0 ^ (HEAP8[i1 + 16 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i9;
   return;
  }
 } while (0);
 if ((HEAP8[i6] & 1) == 0) {
  HEAP8[i7] = 1;
 }
 i7 = i11;
 i11 = i12;
 HEAP32[i7 >> 2] = HEAP32[i11 >> 2];
 HEAP8[i7 + 4 | 0] = HEAP8[i11 + 4 | 0] | 0;
 STACKTOP = i9;
 return;
}
function __ZN7WebCore21computeTextPaintStyleERKNS_10RenderTextERKNS_11RenderStyleERKNS_9PaintInfoE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = HEAP32[i3 + 24 >> 2] | 0;
 HEAP32[i1 >> 2] = (HEAP32[i12 + 88 >> 2] | 0) >>> 17 & 1;
 i13 = i1 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i1 + 8 | 0;
 HEAP8[i14] = 0;
 i15 = i1 + 12 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i1 + 16 | 0;
 HEAP8[i16] = 0;
 i17 = i1 + 20 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i1 + 24 | 0;
 HEAP8[i18] = 0;
 HEAPF32[i1 + 28 >> 2] = +HEAPF32[i12 + 16 >> 2];
 i12 = i1 + 4 | 0;
 if ((HEAP32[i4 + 24 >> 2] & 2 | 0) != 0) {
  HEAP32[i13 >> 2] = -16777216;
  HEAP8[i14] = 1;
  HEAP32[i15 >> 2] = -16777216;
  HEAP8[i16] = 1;
  HEAP32[i17 >> 2] = -16777216;
  HEAP8[i18] = 1;
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i6, i3, 340);
 i18 = i12;
 i17 = i6;
 HEAP32[i18 >> 2] = HEAP32[i17 >> 2];
 HEAP8[i18 + 4 | 0] = HEAP8[i17 + 4 | 0] | 0;
 i17 = HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP8[i17 + 660 | 0] & 1) == 0) {
   i19 = 0;
  } else {
   if (!((HEAP32[i3 + 44 >> 2] & 64 | 0) == 0 & (HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i17 + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 190 | 0] & 1) == 0)) {
    i19 = 0;
    break;
   }
   i2 = i12;
   __ZN7WebCoreL36adjustColorForVisibilityOnBackgroundENS_5ColorES0_(i7, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] & 255, -1, 1);
   i2 = i7;
   HEAP32[i18 >> 2] = HEAP32[i2 >> 2];
   HEAP8[i18 + 4 | 0] = HEAP8[i2 + 4 | 0] | 0;
   i19 = 1;
  }
 } while (0);
 i18 = i1 + 12 | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i8, i3, 343);
 i7 = i18;
 i12 = i8;
 HEAP32[i7 >> 2] = HEAP32[i12 >> 2];
 HEAP8[i7 + 4 | 0] = HEAP8[i12 + 4 | 0] | 0;
 if (i19) {
  i12 = i18;
  __ZN7WebCoreL36adjustColorForVisibilityOnBackgroundENS_5ColorES0_(i9, HEAP32[i12 >> 2] | 0, HEAP32[i12 + 4 >> 2] & 255, -1, 1);
  i12 = i9;
  HEAP32[i7 >> 2] = HEAP32[i12 >> 2];
  HEAP8[i7 + 4 | 0] = HEAP8[i12 + 4 | 0] | 0;
 }
 i12 = i1 + 20 | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i10, i3, 337);
 i3 = i12;
 i1 = i10;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP8[i3 + 4 | 0] = HEAP8[i1 + 4 | 0] | 0;
 if (!i19) {
  STACKTOP = i5;
  return;
 }
 i19 = i12;
 __ZN7WebCoreL36adjustColorForVisibilityOnBackgroundENS_5ColorES0_(i11, HEAP32[i19 >> 2] | 0, HEAP32[i19 + 4 >> 2] & 255, -1, 1);
 i19 = i11;
 HEAP32[i3 >> 2] = HEAP32[i19 >> 2];
 HEAP8[i3 + 4 | 0] = HEAP8[i19 + 4 | 0] | 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore21updateGraphicsContextERNS_15GraphicsContextERKNS_14TextPaintStyleENS_13FillColorTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = __ZNK7WebCore15GraphicsContext15textDrawingModeEv(i1) | 0;
 i10 = i2 + 28 | 0;
 i11 = +HEAPF32[i10 >> 2] > +0 ? i9 | 2 : i9;
 if ((i9 | 0) == (i11 | 0)) {
  i12 = i9;
 } else {
  __ZN7WebCore15GraphicsContext18setTextDrawingModeEj(i1, i11);
  i12 = i11;
 }
 i11 = (i3 | 0) == 1 ? i2 + 20 | 0 : i2 + 4 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 i9 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 HEAP32[i5 + 4 >> 2] = i9;
 L4 : do {
  if ((i12 & 1 | 0) != 0) {
   __ZNK7WebCore15GraphicsContext9fillColorEv(i7, i1);
   do {
    if ((i3 | 0) == (HEAP32[i7 >> 2] | 0)) {
     if (((i3 & 0 | 0) != 0 | (i9 & 1 | 0) != 0) ^ (HEAP8[i7 + 4 | 0] & 1) != 0) {
      break;
     }
     i5 = HEAP32[i2 >> 2] | 0;
     if ((i5 | 0) == (__ZNK7WebCore15GraphicsContext14fillColorSpaceEv(i1) | 0)) {
      break L4;
     }
    }
   } while (0);
   __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i1, i6, HEAP32[i2 >> 2] | 0);
  }
 } while (0);
 if ((i12 & 2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i2 + 12 | 0;
 __ZNK7WebCore15GraphicsContext11strokeColorEv(i8, i1);
 if ((HEAP32[i12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
  if ((HEAP8[i2 + 16 | 0] & 1) != 0 ^ (HEAP8[i8 + 4 | 0] & 1) != 0) {
   i13 = 11;
  }
 } else {
  i13 = 11;
 }
 if ((i13 | 0) == 11) {
  __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i1, i12, HEAP32[i2 >> 2] | 0);
 }
 d14 = +HEAPF32[i10 >> 2];
 if (d14 == +__ZNK7WebCore15GraphicsContext15strokeThicknessEv(i1)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore15GraphicsContext18setStrokeThicknessEf(i1, +HEAPF32[i10 >> 2]);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL36adjustColorForVisibilityOnBackgroundENS_5ColorES0_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i4;
 HEAP8[i7 + 4 | 0] = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i5;
 HEAP32[i5 >> 2] = i2;
 HEAP8[i4 + 4 | 0] = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((__ZN7WebCore17differenceSquaredERKNS_5ColorES2_(i4, i7) | 0) > 65025) {
  i7 = i1;
  i8 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i7 + 4 >> 2] = i8;
  STACKTOP = i6;
  return;
 }
 HEAP32[i3 >> 2] = -1;
 HEAP8[i3 + 4 | 0] = 1;
 i8 = __ZN7WebCore17differenceSquaredERKNS_5ColorES2_(i4, i3) | 0;
 HEAP32[i2 >> 2] = -16777216;
 HEAP8[i2 + 4 | 0] = 1;
 if ((i8 | 0) < (__ZN7WebCore17differenceSquaredERKNS_5ColorES2_(i4, i2) | 0)) {
  __ZNK7WebCore5Color4darkEv(i1, i4);
  STACKTOP = i6;
  return;
 } else {
  __ZNK7WebCore5Color5lightEv(i1, i4);
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore14TextPaintStyleC2ENS_5ColorENS_10ColorSpaceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i1 >> 2] = i3;
 i3 = i2;
 i2 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i5;
 HEAP32[i2 + 4 >> 2] = i6;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = i5;
 HEAP32[i2 + 4 >> 2] = i6;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP8[i1 + 24 | 0] = 0;
 HEAPF32[i1 + 28 >> 2] = +0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14TextPaintStyleC1ENS_5ColorENS_10ColorSpaceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i1 >> 2] = i3;
 i3 = i2;
 i2 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i5;
 HEAP32[i2 + 4 >> 2] = i6;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = i5;
 HEAP32[i2 + 4 >> 2] = i6;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP8[i1 + 24 | 0] = 0;
 HEAPF32[i1 + 28 >> 2] = +0;
 STACKTOP = i4;
 return;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZN7WebCore14TextPaintStyleC2ENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP8[i1 + 16 | 0] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP8[i1 + 24 | 0] = 0;
 HEAPF32[i1 + 28 >> 2] = +0;
 return;
}
function __ZN7WebCore14TextPaintStyleC1ENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP8[i1 + 8 | 0] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP8[i1 + 16 | 0] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP8[i1 + 24 | 0] = 0;
 HEAPF32[i1 + 28 >> 2] = +0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore14TextPaintStyleC2ENS_10ColorSpaceE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore14TextPaintStyleC2ENS_5ColorENS_10ColorSpaceE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore14TextPaintStyleC2ENS_10ColorSpaceE","_memset","_memcpy","__ZN7WebCore30computeTextSelectionPaintStyleERKNS_14TextPaintStyleERKNS_10RenderTextERKNS_11RenderStyleERKNS_9PaintInfoERbSC_RPKNS_10ShadowDataE","__ZN7WebCore21updateGraphicsContextERNS_15GraphicsContextERKNS_14TextPaintStyleENS_13FillColorTypeE","__ZN7WebCoreL36adjustColorForVisibilityOnBackgroundENS_5ColorES0_","__ZN7WebCore21computeTextPaintStyleERKNS_10RenderTextERKNS_11RenderStyleERKNS_9PaintInfoE","__ZN7WebCore14TextPaintStyleC2ENS_5ColorENS_10ColorSpaceE"]
