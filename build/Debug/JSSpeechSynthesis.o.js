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
H_BASE = parentModule["_malloc"](616 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 616;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17JSSpeechSynthesisC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SpeechSynthesisEEE;
var __ZN7WebCore17JSSpeechSynthesisD1Ev;
/* memory initializer */ allocate([103,101,116,86,111,105,99,101,115,0,0,0,0,0,0,0,114,101,115,117,109,101,0,0,112,97,117,115,101,0,0,0,99,97,110,99,101,108,0,0,115,112,101,97,107,0,0,0,112,97,117,115,101,100,0,0,115,112,101,97,107,105,110,103,0,0,0,0,0,0,0,0,112,101,110,100,105,110,103,0,83,112,101,101,99,104,83,121,110,116,104,101,115,105,115,0,83,112,101,101,99,104,83,121,110,116,104,101,115,105,115,80,114,111,116,111,116,121,112,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
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
  var __ZTVN7WebCore15SpeechSynthesisE=env.__ZTVN7WebCore15SpeechSynthesisE|0;
  var __ZN3JSC8JSObject6s_infoE=env.__ZN3JSC8JSObject6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZGVZN7WebCore12wrapperOwnerERNS_15DOMWrapperWorldEPNS_15SpeechSynthesisEE22jsSpeechSynthesisOwner=(H_BASE+616)|0;
  var __ZN7WebCore26JSSpeechSynthesisPrototype6s_infoE=(H_BASE+400)|0;
  var __ZN7WebCore17JSSpeechSynthesis6s_infoE=(H_BASE+504)|0;
  var __ZZN7WebCore12wrapperOwnerERNS_15DOMWrapperWorldEPNS_15SpeechSynthesisEE22jsSpeechSynthesisOwner=(H_BASE+608)|0;
  var __ZTVN7WebCore22JSSpeechSynthesisOwnerE=(H_BASE+136)|0;
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = i10;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 i11 = i9 & i8;
 i13 = i12 + (i11 << 3) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = i13;
   i16 = i10;
  } else {
   i17 = (i9 >>> 23) + ~i9 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i11;
   i21 = i13;
   i22 = i14;
   while (1) {
    if ((i22 | 0) == (i10 | 0)) {
     i23 = 8;
     break;
    }
    i24 = (i22 | 0) == -1 ? i21 : i19;
    i25 = (i18 | 0) == 0 ? i17 : i18;
    i26 = i25 + i20 & i8;
    i27 = i12 + (i26 << 3) | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i23 = 10;
     break;
    } else {
     i18 = i25;
     i19 = i24;
     i20 = i26;
     i21 = i27;
     i22 = i28;
    }
   }
   if ((i23 | 0) == 8) {
    i22 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i20 = i1;
    HEAP32[i20 >> 2] = i21;
    HEAP32[i20 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i23 | 0) == 10) {
    if ((i24 | 0) == 0) {
     i15 = i27;
     i16 = i10;
     break;
    }
    i22 = i24;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i22 + 4 >> 2] = 0;
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i15 = i24;
    i16 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = i16;
 i16 = i6 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i15 + 4 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 HEAP32[i16 >> 2] = i3;
 if ((i3 | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
 }
 i16 = i2 + 12 | 0;
 i3 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i3;
 i16 = i2 + 4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i4 | 0)) {
  i29 = i15;
  i30 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i31 = 8;
  } else {
   i6 = i4 << 1;
   i31 = (i3 * 6 & -1 | 0) < (i6 | 0) ? i4 : i6;
  }
  i6 = __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i31, i15) | 0;
  i29 = i6;
  i30 = HEAP32[i16 >> 2] | 0;
 }
 i16 = (HEAP32[i7 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i16;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    i36 = i13;
   } else {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = i7 + (i37 << 3) + 4 | 0;
    if ((HEAP32[i1 >> 2] | 0) == 0) {
     break;
    }
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 168 >> 2] = H_BASE + 48;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 188 >> 2] = H_BASE + 40;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 208 >> 2] = H_BASE + 32;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 228 >> 2] = H_BASE + 24;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 248 >> 2] = H_BASE + 8;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 296 >> 2] = H_BASE + 168;
 HEAP32[H_BASE + 304 >> 2] = H_BASE + 80;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_iiiiiii + 4;
 HEAP32[H_BASE + 324 >> 2] = H_BASE + 64;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_iiiiiii + 6;
 HEAP32[H_BASE + 344 >> 2] = H_BASE + 56;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 392 >> 2] = H_BASE + 304;
 HEAP32[H_BASE + 400 >> 2] = H_BASE + 104;
 HEAP32[H_BASE + 404 >> 2] = __ZN3JSC8JSObject6s_infoE;
 HEAP32[H_BASE + 408 >> 2] = H_BASE + 288;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_iiiii + 8;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 504 >> 2] = H_BASE + 88;
 HEAP32[H_BASE + 508 >> 2] = __ZN3JSC8JSObject6s_infoE;
 HEAP32[H_BASE + 512 >> 2] = H_BASE + 384;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_iiiii + 6;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_iiiii + 8;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_vii + 2;
}
function __ZN3JSC18getStaticValueSlotIN7WebCore17JSSpeechSynthesisENS1_12JSDOMWrapperEEEbPNS_9ExecStateERKNS_9HashTableEPT_NS_12PropertyNameERNS_12PropertySlotE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 i4 = i2 + 12 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  __ZNK3JSC9HashTable11createTableERNS_2VME(i2, HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0);
 }
 i13 = (HEAP32[i12 + 16 >> 2] & 4 | 0) != 0 ? i12 : 0;
 L4 : do {
  if ((i13 | 0) == 0) {
   i14 = 8;
  } else {
   i15 = (HEAP32[i4 >> 2] | 0) + (((HEAP32[i13 + 16 >> 2] | 0) >>> 7 & HEAP32[i2 + 4 >> 2]) * 24 & -1) | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i14 = 8;
    break;
   } else {
    i17 = i15;
    i18 = i16;
   }
   while (1) {
    if ((i18 | 0) == (i13 | 0)) {
     break;
    }
    i16 = HEAP32[i17 + 20 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i14 = 8;
     break L4;
    }
    i17 = i16;
    i18 = HEAP32[i16 >> 2] | 0;
   }
   i16 = i3 | 0;
   if ((i17 | 0) == 0) {
    i19 = i16;
    break;
   }
   i15 = HEAPU8[i17 + 4 | 0] | 0;
   HEAP32[i5 + 8 >> 2] = HEAP32[i17 + 12 >> 2];
   HEAP32[i5 >> 2] = i15;
   HEAP32[i5 + 32 >> 2] = i16;
   HEAP32[i5 + 16 >> 2] = 3;
   HEAP32[i5 + 20 >> 2] = 0;
   i20 = 1;
   STACKTOP = i6;
   return i20 | 0;
  }
 } while (0);
 if ((i14 | 0) == 8) {
  i19 = i3 | 0;
 }
 i14 = i3 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i17 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i9 >> 2] = i12;
 i18 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i3, i17, i9, i7, i8) | 0;
 if ((i18 | 0) == -1) {
  HEAP32[i11 >> 2] = i12;
  i20 = __ZN3JSC8JSObject22getOwnPropertySlotSlowEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i19, i1, i11, i5) | 0;
  STACKTOP = i6;
  return i20 | 0;
 }
 if ((i18 | 0) < 100) {
  i21 = i19 + (i18 + 1 << 3) | 0;
 } else {
  i21 = (HEAP32[i19 + 4 >> 2] | 0) - 8 + (99 - i18 << 3) | 0;
 }
 i11 = i21 | 0;
 i21 = HEAP32[i11 >> 2] | 0;
 i1 = HEAP32[i11 + 4 >> 2] | 0;
 i11 = i1;
 do {
  if ((HEAP8[(HEAP32[i14 >> 2] | 0) + 58 | 0] & 8) != 0 & ((i11 | 0) == (-5 | 0) & 0 == 0)) {
   if ((HEAP8[(HEAP32[i21 >> 2] | 0) + 52 | 0] | 0) != 8) {
    break;
   }
   i12 = i10 | 0;
   HEAP32[i12 >> 2] = i21 & -1;
   HEAP32[i12 + 4 >> 2] = i1 & 0 | -5;
   __ZN3JSC8JSObject22fillGetterPropertySlotERNS_12PropertySlotENS_7JSValueEji(i19, i5, i10, HEAP32[i7 >> 2] | 0, i18);
   i20 = 1;
   STACKTOP = i6;
   return i20 | 0;
  }
 } while (0);
 i10 = HEAP32[i7 >> 2] | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = i21 & -1;
 HEAP32[i7 + 4 >> 2] = i11 | i1 & 0;
 HEAP32[i5 >> 2] = i10;
 HEAP32[i5 + 32 >> 2] = i19;
 HEAP32[i5 + 16 >> 2] = 1;
 HEAP32[i5 + 20 >> 2] = i18;
 i20 = 1;
 STACKTOP = i6;
 return i20 | 0;
}
function __ZN3JSC21getStaticFunctionSlotINS_8JSObjectEEEbPNS_9ExecStateERKNS_9HashTableEPS1_NS_12PropertyNameERNS_12PropertySlotE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 i4 = i3 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 i14 = i1 + 16 | 0;
 i15 = HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0;
 HEAP32[i8 >> 2] = i12;
 i16 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i13, i15, i8, i7, i6 + 8 | 0) | 0;
 if ((i16 | 0) != -1) {
  if ((i16 | 0) < 100) {
   i17 = i3 + (i16 + 1 << 3) | 0;
  } else {
   i17 = (HEAP32[i3 + 4 >> 2] | 0) - 8 + (99 - i16 << 3) | 0;
  }
  i8 = i17 | 0;
  i17 = HEAP32[i8 >> 2] | 0;
  i15 = HEAP32[i8 + 4 >> 2] | 0;
  i8 = i15;
  do {
   if ((HEAP8[(HEAP32[i4 >> 2] | 0) + 58 | 0] & 8) != 0 & ((i8 | 0) == (-5 | 0) & 0 == 0)) {
    if ((HEAP8[(HEAP32[i17 >> 2] | 0) + 52 | 0] | 0) != 8) {
     break;
    }
    i13 = i9 | 0;
    HEAP32[i13 >> 2] = i17 & -1;
    HEAP32[i13 + 4 >> 2] = i15 & 0 | -5;
    __ZN3JSC8JSObject22fillGetterPropertySlotERNS_12PropertySlotENS_7JSValueEji(i3, i5, i9, HEAP32[i7 >> 2] | 0, i16);
    i18 = 1;
    STACKTOP = i6;
    return i18 | 0;
   }
  } while (0);
  i9 = HEAP32[i7 >> 2] | 0;
  i7 = i5 + 8 | 0;
  HEAP32[i7 >> 2] = i17 & -1;
  HEAP32[i7 + 4 >> 2] = i8 | i15 & 0;
  HEAP32[i5 >> 2] = i9;
  HEAP32[i5 + 32 >> 2] = i3;
  HEAP32[i5 + 16 >> 2] = 1;
  HEAP32[i5 + 20 >> 2] = i16;
  i18 = 1;
  STACKTOP = i6;
  return i18 | 0;
 }
 HEAP32[i10 >> 2] = i12;
 if (__ZN3JSC8JSObject22getOwnPropertySlotSlowEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i3, i1, i10, i5) | 0) {
  i18 = 1;
  STACKTOP = i6;
  return i18 | 0;
 }
 i10 = i2 + 12 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  __ZNK3JSC9HashTable11createTableERNS_2VME(i2, HEAP32[(HEAP32[i14 >> 2] & -65536) + 1076 >> 2] | 0);
 }
 i14 = (HEAP32[i12 + 16 >> 2] & 4 | 0) != 0 ? i12 : 0;
 if ((i14 | 0) == 0) {
  i18 = 0;
  STACKTOP = i6;
  return i18 | 0;
 }
 i16 = (HEAP32[i10 >> 2] | 0) + (((HEAP32[i14 + 16 >> 2] | 0) >>> 7 & HEAP32[i2 + 4 >> 2]) * 24 & -1) | 0;
 i2 = HEAP32[i16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i18 = 0;
  STACKTOP = i6;
  return i18 | 0;
 } else {
  i19 = i16;
  i20 = i2;
 }
 while (1) {
  if ((i20 | 0) == (i14 | 0)) {
   break;
  }
  i2 = HEAP32[i19 + 20 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i18 = 0;
   i21 = 25;
   break;
  }
  i19 = i2;
  i20 = HEAP32[i2 >> 2] | 0;
 }
 if ((i21 | 0) == 25) {
  STACKTOP = i6;
  return i18 | 0;
 }
 if ((i19 | 0) == 0) {
  i18 = 0;
  STACKTOP = i6;
  return i18 | 0;
 }
 HEAP32[i11 >> 2] = i12;
 i18 = __ZN3JSC23setUpStaticFunctionSlotEPNS_9ExecStateEPKNS_9HashEntryEPNS_8JSObjectENS_12PropertyNameERNS_12PropertySlotE(i1, i19, i3, i11, i5) | 0;
 STACKTOP = i6;
 return i18 | 0;
}
function __ZN7WebCore22JSSpeechSynthesisOwner8finalizeEN3JSC6HandleINS1_7UnknownEEEPv(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i1 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i4 = i5 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i2 = i5;
 i6 = i3 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i3 + 8 >> 2] | 0;
  i9 = i8 << 3 | 0;
  i10 = 0;
  i11 = i8;
 } else {
  i8 = HEAP32[i3 + 12 >> 2] | 0;
  i12 = i5;
  i5 = i12 + ~(i12 << 15) | 0;
  i12 = (i5 >>> 10 ^ i5) * 9 & -1;
  i5 = i12 >>> 6 ^ i12;
  i12 = i5 + ~(i5 << 11) | 0;
  i5 = i12 >>> 16 ^ i12;
  i12 = i8 & i5;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  L6 : do {
   if ((i14 | 0) == (i2 | 0)) {
    i15 = i13;
   } else {
    i16 = (i5 >>> 23) + ~i5 | 0;
    i17 = i16 << 12 ^ i16;
    i16 = i17 >>> 7 ^ i17;
    i17 = i16 << 2 ^ i16;
    i16 = i17 >>> 20 ^ i17 | 1;
    i17 = 0;
    i18 = i12;
    i19 = i14;
    while (1) {
     if ((i19 | 0) == 0) {
      i15 = 0;
      break L6;
     }
     i20 = (i17 | 0) == 0 ? i16 : i17;
     i21 = i20 + i18 & i8;
     i22 = i7 + (i21 << 3) | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     if ((i23 | 0) == (i2 | 0)) {
      i15 = i22;
      break;
     } else {
      i17 = i20;
      i18 = i21;
      i19 = i23;
     }
    }
   }
  } while (0);
  i2 = HEAP32[i3 + 8 >> 2] | 0;
  i9 = (i15 | 0) == 0 ? i7 + (i2 << 3) | 0 : i15;
  i10 = i7;
  i11 = i2;
 }
 i2 = i6;
 i6 = i3 + 8 | 0;
 do {
  if ((i9 | 0) != (i10 + (i11 << 3) | 0)) {
   i7 = i9 + 4 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
   }
   HEAP32[i9 >> 2] = -1;
   i7 = i3 + 20 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   i7 = i3 + 16 | 0;
   i15 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i15;
   i7 = HEAP32[i6 >> 2] | 0;
   if (!((i15 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, (i7 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i2 = (HEAP32[i4 >> 2] | 0) + 4 | 0;
 i6 = i2 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i6 >> 2] = i3;
  HEAP32[i4 >> 2] = 0;
  STACKTOP = i1;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i4 >> 2] = 0;
  STACKTOP = i1;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 15](i3);
 HEAP32[i4 >> 2] = 0;
 STACKTOP = i1;
 return;
}
function __ZN7WebCore7jsArrayIN3WTF6RefPtrINS_20SpeechSynthesisVoiceEEELj0EEEN3JSC7JSValueEPNS5_9ExecStateEPNS_17JSDOMGlobalObjectERKNS1_6VectorIT_XT0_ENS1_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 104 | 0;
 i11 = i9 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i9 + 4 | 0;
 HEAP32[i12 >> 2] = 8;
 i13 = i9 + 72 | 0;
 i14 = i9 + 8 | 0;
 HEAP32[i13 >> 2] = i14;
 i15 = i9 + 76 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = HEAP32[i4 >> 2] | 0;
 i17 = HEAP32[i4 + 8 >> 2] | 0;
 i4 = i16 + (i17 << 2) | 0;
 if ((i17 | 0) == 0) {
  i18 = i14;
  i19 = 0;
 } else {
  i14 = i10 | 0;
  i17 = i6 | 0;
  i20 = i16;
  while (1) {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_20SpeechSynthesisVoiceE(i10, i2, i3, HEAP32[i20 >> 2] | 0);
   i16 = HEAP32[i14 >> 2] | 0;
   i21 = HEAP32[i14 + 4 >> 2] | 0;
   i22 = HEAP32[i11 >> 2] | 0;
   if ((i22 | 0) < (HEAP32[i12 >> 2] | 0)) {
    i23 = (HEAP32[i13 >> 2] | 0) + (i22 << 3) | 0;
    HEAP32[i23 >> 2] = i16;
    HEAP32[i23 + 4 >> 2] = i21;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   } else {
    HEAP32[i17 >> 2] = i16;
    HEAP32[i17 + 4 >> 2] = i21;
    __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i9, i6);
   }
   i20 = i20 + 4 | 0;
   if ((i20 | 0) == (i4 | 0)) {
    break;
   }
  }
  i18 = HEAP32[i13 >> 2] | 0;
  i19 = HEAP32[i11 >> 2] | 0;
 }
 i11 = i18;
 i18 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = __ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj(i18, HEAP32[i3 + 244 >> 2] | 0, i19) | 0;
 if ((i2 | 0) == 0) {
  _WTFCrash();
 }
 if ((i19 | 0) != 0) {
  i3 = i2 | 0;
  i4 = i7 | 0;
  i20 = i7 + 4 | 0;
  i6 = i7;
  i17 = 0;
  while (1) {
   if ((i19 | 0) > (i17 | 0)) {
    i14 = i11 + (i17 << 3) | 0;
    i10 = HEAP32[i14 + 4 >> 2] | 0;
    HEAP32[i4 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i4 + 4 >> 2] = i10;
   } else {
    HEAP32[i20 >> 2] = -4;
    HEAP32[i6 >> 2] = 0;
   }
   __ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE(i3, i18, i17, i7);
   i17 = i17 + 1 | 0;
   if (i17 >>> 0 >= i19 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 + 4 >> 2] = -5;
 HEAP32[i1 >> 2] = i2;
 i2 = HEAP32[i15 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i8 >> 2] = i9;
  __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i2, i8) | 0;
 }
 if ((HEAP32[i12 >> 2] | 0) == 8) {
  STACKTOP = i5;
  return;
 }
 i12 = HEAP32[i13 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZdaPv(i12);
 STACKTOP = i5;
 return;
}
function __ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 L1 : do {
  switch (HEAP8[(HEAP32[i1 >> 2] | 0) + 55 | 0] & 31 | 0) {
  case 3:
   {
    i10 = i4 | 0;
    i11 = HEAP32[i10 + 4 >> 2] | 0;
    i12 = i6 | 0;
    HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i12 + 4 >> 2] = i11;
    __ZN3JSC8JSObject26setIndexQuicklyToUndecidedERNS_2VMEjNS_7JSValueE(i1, i2, i3, i6);
    STACKTOP = i5;
    return;
   }
  case 22:
  case 23:
   {
    i11 = HEAP32[i4 + 4 >> 2] | 0;
    i12 = (i11 | 0) == -1;
    if (!(i12 | i11 >>> 0 < 4294967289 >>> 0)) {
     i11 = i4 | 0;
     i10 = HEAP32[i11 + 4 >> 2] | 0;
     i13 = i8 | 0;
     HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i13 + 4 >> 2] = i10;
     __ZN3JSC8JSObject48convertDoubleToContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i8);
     STACKTOP = i5;
     return;
    }
    if (i12) {
     d14 = +(HEAP32[i4 >> 2] | 0);
    } else {
     d14 = +HEAPF64[i4 >> 3];
    }
    if (d14 != d14 | (tempDouble = +0, tempDouble != tempDouble)) {
     i12 = i4 | 0;
     i10 = HEAP32[i12 + 4 >> 2] | 0;
     i13 = i9 | 0;
     HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i13 + 4 >> 2] = i10;
     __ZN3JSC8JSObject48convertDoubleToContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i9);
     STACKTOP = i5;
     return;
    } else {
     HEAPF64[(HEAP32[i1 + 4 >> 2] | 0) + (i3 << 3) >> 3] = d14;
     STACKTOP = i5;
     return;
    }
    break;
   }
  case 26:
  case 27:
   {
    break;
   }
  case 28:
  case 30:
  case 29:
  case 31:
   {
    i10 = i4 | 0;
    i13 = HEAP32[i10 + 4 >> 2] | 0;
    i12 = (HEAP32[i1 + 4 >> 2] | 0) + 16 + (i3 << 3) | 0;
    HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i12 + 4 >> 2] = i13;
    STACKTOP = i5;
    return;
   }
  case 20:
  case 21:
   {
    if ((HEAP32[i4 + 4 >> 2] | 0) == -1) {
     break L1;
    }
    i13 = i4 | 0;
    i12 = HEAP32[i13 + 4 >> 2] | 0;
    i10 = i7 | 0;
    HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i10 + 4 >> 2] = i12;
    __ZN3JSC8JSObject55convertInt32ToDoubleOrContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i7);
    STACKTOP = i5;
    return;
   }
  default:
   {
    _WTFCrash();
   }
  }
 } while (0);
 i7 = i4 | 0;
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 i2 = (HEAP32[i1 + 4 >> 2] | 0) + (i3 << 3) | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 STACKTOP = i5;
 return;
}
function __ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i3 >>> 0 > 4 >>> 0 ? i3 : 4;
 if (i9 >>> 0 > 268435456 >>> 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 i11 = i2 + 55 | 0;
 i12 = i9 << 3;
 do {
  if (((HEAP8[i11] & 30) - 28 & 255) >>> 0 < 3 >>> 0) {
   i13 = i12 + 24 | 0;
   i14 = i1 + 19600 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   do {
    if (i15 >>> 0 < i13 >>> 0) {
     __ZN3JSC11CopiedSpace19tryAllocateSlowCaseEjPPv(i8, i1 + 19596 | 0, i13, i7);
     if ((HEAP8[i8 | 0] & 1) == 0) {
      i10 = 0;
     } else {
      break;
     }
     STACKTOP = i4;
     return i10 | 0;
    } else {
     HEAP32[i14 >> 2] = i15 - i13;
     HEAP32[i7 >> 2] = (HEAP32[i1 + 19604 >> 2] | 0) + (-i15 | 0);
     HEAP8[i8 | 0] = 1;
    }
   } while (0);
   i15 = HEAP32[i7 >> 2] | 0;
   i13 = i15 + 8 | 0;
   i14 = i15;
   HEAP32[i14 >> 2] = i3;
   HEAP32[i14 + 4 >> 2] = i9;
   HEAP32[i15 + 12 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i15 + 16 >> 2] = i3;
   i16 = i13;
  } else {
   i13 = i12 + 8 | 0;
   i15 = i1 + 19600 | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if (i14 >>> 0 < i13 >>> 0) {
     __ZN3JSC11CopiedSpace19tryAllocateSlowCaseEjPPv(i6, i1 + 19596 | 0, i13, i5);
     if ((HEAP8[i6 | 0] & 1) == 0) {
      i10 = 0;
     } else {
      break;
     }
     STACKTOP = i4;
     return i10 | 0;
    } else {
     HEAP32[i15 >> 2] = i14 - i13;
     HEAP32[i5 >> 2] = (HEAP32[i1 + 19604 >> 2] | 0) + (-i14 | 0);
     HEAP8[i6 | 0] = 1;
    }
   } while (0);
   i14 = HEAP32[i5 >> 2] | 0;
   i13 = i14 + 8 | 0;
   i15 = i13;
   HEAP32[i14 + 4 >> 2] = i9;
   HEAP32[i14 >> 2] = i3;
   if (!((HEAP8[i11] & 30) == 22 & i9 >>> 0 > i3 >>> 0)) {
    i16 = i15;
    break;
   }
   i14 = i13;
   i13 = i3;
   while (1) {
    HEAPF64[i14 + (i13 << 3) >> 3] = +NaN;
    i17 = i13 + 1 | 0;
    if (i17 >>> 0 < i9 >>> 0) {
     i13 = i17;
    } else {
     i16 = i15;
     break;
    }
   }
  }
 } while (0);
 i9 = i1 + 13176 | 0;
 i1 = i9 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i18 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i9, 8) | 0;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  i18 = i3;
 }
 HEAP32[i18 >> 2] = i2;
 HEAP32[i18 + 4 >> 2] = i16;
 i10 = i18;
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i3 = i1 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i4 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 i4 = (i5 | 0) / 2 & -1;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i4 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i4 << 2) | 0;
 if ((i5 | 0) != 0) {
  i4 = 0;
  while (1) {
   i1 = HEAP32[i7 + (i4 << 2) >> 2] | 0;
   i8 = i1;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    i9 = HEAP32[i6 >> 2] | 0;
    i10 = HEAP32[i3 >> 2] | 0;
    i11 = i8 + ~(i8 << 15) | 0;
    i8 = (i11 >>> 10 ^ i11) * 9 & -1;
    i11 = i8 >>> 6 ^ i8;
    i8 = i11 + ~(i11 << 11) | 0;
    i11 = i8 >>> 16 ^ i8;
    i8 = i10 & i11;
    i12 = i9 + (i8 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    L9 : do {
     if ((i13 | 0) == 0) {
      i14 = 0;
      i15 = i12;
      i16 = 6;
     } else {
      i17 = (i11 >>> 23) + ~i11 | 0;
      i18 = i17 << 12 ^ i17;
      i17 = i18 >>> 7 ^ i18;
      i18 = i17 << 2 ^ i17;
      i17 = i18 >>> 20 ^ i18 | 1;
      i18 = 0;
      i19 = 0;
      i20 = i8;
      i21 = i12;
      i22 = i13;
      while (1) {
       if ((i22 | 0) == (i1 | 0)) {
        i23 = i21;
        break L9;
       }
       i24 = (i22 | 0) == -1 ? i21 : i18;
       i25 = (i19 | 0) == 0 ? i17 : i19;
       i26 = i25 + i20 & i10;
       i27 = i9 + (i26 << 2) | 0;
       i28 = HEAP32[i27 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i14 = i24;
        i15 = i27;
        i16 = 6;
        break;
       } else {
        i18 = i24;
        i19 = i25;
        i20 = i26;
        i21 = i27;
        i22 = i28;
       }
      }
     }
    } while (0);
    if ((i16 | 0) == 6) {
     i16 = 0;
     i23 = (i14 | 0) != 0 ? i14 : i15;
    }
    HEAP32[i23 >> 2] = i1;
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore39jsSpeechSynthesisPrototypeFunctionSpeakEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 40 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7;
 L1 : do {
  if ((i7 & 0 | 0) == 0 & (HEAP32[i6 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i9 = i8;
   if ((HEAP32[(i8 & -65536) + 1048 >> 2] | 0) == 2) {
    i10 = i9 + 8 | 0;
   } else {
    i10 = (HEAP32[i9 >> 2] | 0) + 32 | 0;
   }
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i11 = i9;
   }
   while (1) {
    if ((i11 | 0) == (H_BASE + 504 | 0)) {
     break;
    }
    i11 = HEAP32[i11 + 4 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L1;
    }
   }
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i8 + 12 >> 2] | 0;
   if ((HEAP32[i1 + 32 >> 2] | 0) == 1) {
    i12 = __ZN3JSC29createNotEnoughArgumentsErrorEPNS_9ExecStateE(i1) | 0;
    i13 = (i12 | 0) == 0;
    i14 = HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
    i15 = i4 | 0;
    HEAP32[i15 >> 2] = (i13 ? 0 : 0) | i12;
    HEAP32[i15 + 4 >> 2] = i13 ? -6 : -5;
    __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i3, i14, i1, i4);
    i14 = i3 | 0;
    i16 = HEAP32[i14 + 4 >> 2] | 0;
    i17 = HEAP32[i14 >> 2] | 0;
    STACKTOP = i2;
    return (tempRet0 = i16, i17) | 0;
   }
   i14 = i1 + 48 | 0;
   i13 = HEAP32[i14 + 4 >> 2] | 0;
   i15 = i5 | 0;
   HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i15 + 4 >> 2] = i13;
   i13 = __ZN7WebCore26toSpeechSynthesisUtteranceEN3JSC7JSValueE(i5) | 0;
   i15 = (HEAP32[(HEAP32[i1 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i15 >> 2] & 0 | 0) == 0 & (HEAP32[i15 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    i16 = -4;
    i17 = 0;
    STACKTOP = i2;
    return (tempRet0 = i16, i17) | 0;
   }
   __ZN7WebCore15SpeechSynthesis5speakEPNS_24SpeechSynthesisUtteranceE(i9, i13);
   i16 = -4;
   i17 = 0;
   STACKTOP = i2;
   return (tempRet0 = i16, i17) | 0;
  }
 } while (0);
 i5 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i5 | 0) == 0;
 i16 = (i1 ? -6 : -5) | 0;
 i17 = (i1 ? 0 : 0) | i5;
 STACKTOP = i2;
 return (tempRet0 = i16, i17) | 0;
}
function __ZN7WebCore12cacheWrapperINS_15SpeechSynthesisENS_17JSSpeechSynthesisEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 616 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = H_BASE + 144;
  HEAP32[H_BASE + 608 >> 2] = i10;
  HEAP32[H_BASE + 616 >> 2] = 1;
  HEAP32[H_BASE + 620 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 608 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_15SpeechSynthesisE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore18getExistingWrapperINS_17JSSpeechSynthesisENS_15SpeechSynthesisEEEN3JSC7JSValueEPNS3_9ExecStateEPT0_(i6, i2, i4);
 if ((HEAP32[i6 + 4 >> 2] | 0) != -6) {
  i7 = i6 | 0;
  i6 = HEAP32[i7 + 4 >> 2] | 0;
  i8 = i1 | 0;
  HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i8 + 4 >> 2] = i6;
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) != (__ZTVN7WebCore15SpeechSynthesisE + 8 | 0)) {
  _WTFCrash();
 }
 i6 = i2 + 16 | 0;
 i2 = __ZN7WebCore15getDOMStructureINS_17JSSpeechSynthesisEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i6 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
 i8 = i4 + 4 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = (HEAP32[(HEAP32[(i3 & -65536) + 1076 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i3 = i8 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i9 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i8, 16) | 0;
 } else {
  HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
  i9 = i7;
 }
 HEAP32[i9 >> 2] = i2;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i9 + 12 >> 2] = i4;
 __ZN7WebCore12cacheWrapperINS_15SpeechSynthesisENS_17JSSpeechSynthesisEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i6 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i4, i9);
 HEAP32[i1 + 4 >> 2] = (i9 | 0) == 0 ? -6 : -5;
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i5;
 return;
}
function __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L3 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L3;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1 | 0, i5);
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore18getExistingWrapperINS_17JSSpeechSynthesisENS_15SpeechSynthesisEEEN3JSC7JSValueEPNS3_9ExecStateEPT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = HEAP32[(HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
 i2 = i3;
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 i4 = i3;
 i3 = i4 + ~(i4 << 15) | 0;
 i4 = (i3 >>> 10 ^ i3) * 9 & -1;
 i3 = i4 >>> 6 ^ i4;
 i4 = i3 + ~(i3 << 11) | 0;
 i3 = i4 >>> 16 ^ i4;
 L1 : do {
  if ((i6 | 0) == 0) {
   i7 = 0;
  } else {
   i4 = i5 & i3;
   i8 = i6 + (i4 << 3) | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == (i2 | 0)) {
    i10 = i8;
   } else {
    i8 = (i3 >>> 23) + ~i3 | 0;
    i11 = i8 << 12 ^ i8;
    i8 = i11 >>> 7 ^ i11;
    i11 = i8 << 2 ^ i8;
    i8 = i11 >>> 20 ^ i11 | 1;
    i11 = 0;
    i12 = i4;
    i4 = i9;
    while (1) {
     if ((i4 | 0) == 0) {
      i7 = 0;
      break L1;
     }
     i9 = (i11 | 0) == 0 ? i8 : i11;
     i13 = i9 + i12 & i5;
     i14 = i6 + (i13 << 3) | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == (i2 | 0)) {
      i10 = i14;
      break;
     } else {
      i11 = i9;
      i12 = i13;
      i4 = i15;
     }
    }
   }
   if ((i10 | 0) == 0) {
    i7 = 0;
    break;
   }
   i4 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i7 = 0;
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] & 3 | 0) != 0) {
    i7 = 0;
    break;
   }
   i7 = HEAP32[i4 >> 2] | 0;
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = (i7 | 0) == 0 ? -6 : -5;
 HEAP32[i1 >> 2] = i7;
 return;
}
function __ZN7WebCore43jsSpeechSynthesisPrototypeFunctionGetVoicesEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 40 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 L1 : do {
  if ((i5 & 0 | 0) == 0 & (HEAP32[i4 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i7 = i6;
   if ((HEAP32[(i6 & -65536) + 1048 >> 2] | 0) == 2) {
    i8 = i7 + 8 | 0;
   } else {
    i8 = (HEAP32[i7 >> 2] | 0) + 32 | 0;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i9 = i7;
   }
   while (1) {
    if ((i9 | 0) == (H_BASE + 504 | 0)) {
     break;
    }
    i9 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break L1;
    }
   }
   i7 = i6;
   if ((i6 | 0) == 0) {
    break;
   }
   i10 = HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0;
   __ZN7WebCore7jsArrayIN3WTF6RefPtrINS_20SpeechSynthesisVoiceEEELj0EEEN3JSC7JSValueEPNS5_9ExecStateEPNS_17JSDOMGlobalObjectERKNS1_6VectorIT_XT0_ENS1_15CrashOnOverflowEEE(i3, i1, i10, __ZN7WebCore15SpeechSynthesis9getVoicesEv(HEAP32[i7 + 12 >> 2] | 0) | 0);
   i7 = i3 | 0;
   i11 = HEAP32[i7 + 4 >> 2] | 0;
   i12 = HEAP32[i7 >> 2] | 0;
   STACKTOP = i2;
   return (tempRet0 = i11, i12) | 0;
  }
 } while (0);
 i3 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i3 | 0) == 0;
 i11 = (i1 ? -6 : -5) | 0;
 i12 = (i1 ? 0 : 0) | i3;
 STACKTOP = i2;
 return (tempRet0 = i11, i12) | 0;
}
function __ZN7WebCore17JSSpeechSynthesis15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 136 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 32;
 HEAP8[i5 + 2 | 0] = 0;
 i8 = i1 + 7104 | 0;
 i9 = i8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i8, 64) | 0;
 } else {
  HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  i11 = i10;
 }
 HEAP32[i11 >> 2] = 0;
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = (i7 ? 0 : 0) | i6;
 HEAP32[i10 + 4 >> 2] = i7 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i11, i1, i2, i4, i5, H_BASE + 400, 0, 0);
 i5 = i1 + 13176 | 0;
 i1 = i5 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i12 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i5, 8) | 0;
  i13 = i11;
  i14 = i12;
  HEAP32[i14 >> 2] = i13;
  i15 = i12 + 4 | 0;
  i16 = i15;
  HEAP32[i16 >> 2] = 0;
  i17 = i12;
  STACKTOP = i3;
  return i17 | 0;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
  i12 = i4;
  i13 = i11;
  i14 = i12;
  HEAP32[i14 >> 2] = i13;
  i15 = i12 + 4 | 0;
  i16 = i15;
  HEAP32[i16 >> 2] = 0;
  i17 = i12;
  STACKTOP = i3;
  return i17 | 0;
 }
 return 0;
}
function __ZN7WebCore15getDOMStructureINS_17JSSpeechSynthesisEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, H_BASE + 504) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore17JSSpeechSynthesis15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, H_BASE + 504, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, H_BASE + 504) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore25jsSpeechSynthesisSpeakingEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 504 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   i9 = -2 | 0;
   i10 = (__ZNK7WebCore15SpeechSynthesis8speakingEv(HEAP32[i2 + 12 >> 2] | 0) | 0) & 1 | 0;
   STACKTOP = i3;
   return (tempRet0 = i9, i10) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i9 = (i1 ? -6 : -5) | 0;
 i10 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i9, i10) | 0;
}
function __ZN7WebCore24jsSpeechSynthesisPendingEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 504 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   i9 = -2 | 0;
   i10 = (__ZNK7WebCore15SpeechSynthesis7pendingEv(HEAP32[i2 + 12 >> 2] | 0) | 0) & 1 | 0;
   STACKTOP = i3;
   return (tempRet0 = i9, i10) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i9 = (i1 ? -6 : -5) | 0;
 i10 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i9, i10) | 0;
}
function __ZN7WebCore23jsSpeechSynthesisPausedEPN3JSC9ExecStateExxNS0_12PropertyNameE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 i2 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 i2 = i4;
 L1 : do {
  if ((i4 & 0 | 0) == 0 & (i5 & -1 | 0) == (-5 | 0)) {
   i6 = i2;
   if ((HEAP32[(i2 & -65536) + 1048 >> 2] | 0) == 2) {
    i7 = i6 + 8 | 0;
   } else {
    i7 = (HEAP32[i6 >> 2] | 0) + 32 | 0;
   }
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   } else {
    i8 = i6;
   }
   while (1) {
    if ((i8 | 0) == (H_BASE + 504 | 0)) {
     break;
    }
    i8 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    }
   }
   if ((i2 | 0) == 0) {
    break;
   }
   i9 = -2 | 0;
   i10 = (__ZNK7WebCore15SpeechSynthesis6pausedEv(HEAP32[i2 + 12 >> 2] | 0) | 0) & 1 | 0;
   STACKTOP = i3;
   return (tempRet0 = i9, i10) | 0;
  }
 } while (0);
 i2 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i2 | 0) == 0;
 i9 = (i1 ? -6 : -5) | 0;
 i10 = (i1 ? 0 : 0) | i2;
 STACKTOP = i3;
 return (tempRet0 = i9, i10) | 0;
}
function __ZN7WebCore40jsSpeechSynthesisPrototypeFunctionResumeEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3;
 L1 : do {
  if ((i3 & 0 | 0) == 0 & (HEAP32[i2 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i5 = i4;
   if ((HEAP32[(i4 & -65536) + 1048 >> 2] | 0) == 2) {
    i6 = i5 + 8 | 0;
   } else {
    i6 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i7 = i5;
   }
   while (1) {
    if ((i7 | 0) == (H_BASE + 504 | 0)) {
     break;
    }
    i7 = HEAP32[i7 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L1;
    }
   }
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore15SpeechSynthesis6resumeEv(HEAP32[i4 + 12 >> 2] | 0);
   i8 = -4;
   i9 = 0;
   return (tempRet0 = i8, i9) | 0;
  }
 } while (0);
 i4 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i4 | 0) == 0;
 i8 = (i1 ? -6 : -5) | 0;
 i9 = (i1 ? 0 : 0) | i4;
 return (tempRet0 = i8, i9) | 0;
}
function __ZN7WebCore40jsSpeechSynthesisPrototypeFunctionCancelEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3;
 L1 : do {
  if ((i3 & 0 | 0) == 0 & (HEAP32[i2 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i5 = i4;
   if ((HEAP32[(i4 & -65536) + 1048 >> 2] | 0) == 2) {
    i6 = i5 + 8 | 0;
   } else {
    i6 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i7 = i5;
   }
   while (1) {
    if ((i7 | 0) == (H_BASE + 504 | 0)) {
     break;
    }
    i7 = HEAP32[i7 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L1;
    }
   }
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore15SpeechSynthesis6cancelEv(HEAP32[i4 + 12 >> 2] | 0);
   i8 = -4;
   i9 = 0;
   return (tempRet0 = i8, i9) | 0;
  }
 } while (0);
 i4 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i4 | 0) == 0;
 i8 = (i1 ? -6 : -5) | 0;
 i9 = (i1 ? 0 : 0) | i4;
 return (tempRet0 = i8, i9) | 0;
}
function __ZN7WebCore39jsSpeechSynthesisPrototypeFunctionPauseEPN3JSC9ExecStateE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3;
 L1 : do {
  if ((i3 & 0 | 0) == 0 & (HEAP32[i2 + 4 >> 2] & -1 | 0) == (-5 | 0)) {
   i5 = i4;
   if ((HEAP32[(i4 & -65536) + 1048 >> 2] | 0) == 2) {
    i6 = i5 + 8 | 0;
   } else {
    i6 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
   }
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   } else {
    i7 = i5;
   }
   while (1) {
    if ((i7 | 0) == (H_BASE + 504 | 0)) {
     break;
    }
    i7 = HEAP32[i7 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L1;
    }
   }
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore15SpeechSynthesis5pauseEv(HEAP32[i4 + 12 >> 2] | 0);
   i8 = -4;
   i9 = 0;
   return (tempRet0 = i8, i9) | 0;
  }
 } while (0);
 i4 = __ZN3JSC14throwTypeErrorEPNS_9ExecStateE(i1) | 0;
 i1 = (i4 | 0) == 0;
 i8 = (i1 ? -6 : -5) | 0;
 i9 = (i1 ? 0 : 0) | i4;
 return (tempRet0 = i8, i9) | 0;
}
function __ZN7WebCore17toSpeechSynthesisEN3JSC7JSValueE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 i3 = i1;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 if ((HEAP32[i1 + 4 >> 2] | 0) != -5) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 i5 = i3;
 if ((HEAP32[(i3 & -65536) + 1048 >> 2] | 0) == 2) {
  i6 = i5 + 8 | 0;
 } else {
  i6 = (HEAP32[i5 >> 2] | 0) + 32 | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 } else {
  i7 = i5;
 }
 while (1) {
  if ((i7 | 0) == (H_BASE + 504 | 0)) {
   break;
  }
  i5 = HEAP32[i7 + 4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i4 = 0;
   i8 = 13;
   break;
  } else {
   i7 = i5;
  }
 }
 if ((i8 | 0) == 13) {
  STACKTOP = i2;
  return i4 | 0;
 }
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] | 0;
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore17JSSpeechSynthesis18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 i3 = __ZN3JSC18getStaticValueSlotIN7WebCore17JSSpeechSynthesisENS1_12JSDOMWrapperEEEbPNS_9ExecStateERKNS_9HashTableEPT_NS_12PropertyNameERNS_12PropertySlotE(i2, H_BASE + 384, i1, i6, i4) | 0;
 STACKTOP = i5;
 return i3 | 0;
}
function __ZN7WebCore26JSSpeechSynthesisPrototype18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 i3 = __ZN3JSC21getStaticFunctionSlotINS_8JSObjectEEEbPNS_9ExecStateERKNS_9HashTableEPS1_NS_12PropertyNameERNS_12PropertySlotE(i2, H_BASE + 288, i1, i6, i4) | 0;
 STACKTOP = i5;
 return i3 | 0;
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
function __ZN7WebCore17JSSpeechSynthesis7destroyEPN3JSC6JSCellE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 12 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] & 15](i5);
  } else {
   HEAP32[i1 >> 2] = i4;
  }
 } while (0);
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore17JSSpeechSynthesisD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 12 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] & 15](i5);
  } else {
   HEAP32[i1 >> 2] = i4;
  }
 } while (0);
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore17JSSpeechSynthesisD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 12 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] & 15](i5);
  } else {
   HEAP32[i1 >> 2] = i4;
  }
 } while (0);
 HEAP32[i2 >> 2] = 0;
 return;
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
function __ZN7WebCore17JSSpeechSynthesisC2EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SpeechSynthesisEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 32 >> 2];
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i4;
 return;
}
function __ZN7WebCore17JSSpeechSynthesisC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SpeechSynthesisEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 32 >> 2];
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i4;
 return;
}
function iiiiii___ZN3JSC8JSObject17defineOwnPropertyEPS0_PNS_9ExecStateENS_12PropertyNameERKNS_18PropertyDescriptorEb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN3JSC8JSObject17defineOwnPropertyEPS0_PNS_9ExecStateENS_12PropertyNameERKNS_18PropertyDescriptorEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore22JSSpeechSynthesisOwner26isReachableFromOpaqueRootsEN3JSC6HandleINS1_7UnknownEEEPvRNS1_11SlotVisitorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i4 = STACKTOP;
 i3 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 STACKTOP = i4;
 return 0;
}
function viiiii___ZN3JSC8JSObject3putEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN3JSC8JSObject3putEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiii___ZN3JSC8JSObject27getOwnNonIndexPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject27getOwnNonIndexPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZN3JSC8JSObject19getOwnPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject19getOwnPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZN3JSC8JSObject16getPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject16getPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiiii___ZN3JSC8JSObject25getOwnPropertySlotByIndexEPS0_PNS_9ExecStateEjRNS_12PropertySlotE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN3JSC8JSObject25getOwnPropertySlotByIndexEPS0_PNS_9ExecStateEjRNS_12PropertySlotE(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function viiiii___ZN3JSC8JSObject10putByIndexEPNS_6JSCellEPNS_9ExecStateEjNS_7JSValueEb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN3JSC8JSObject10putByIndexEPNS_6JSCellEPNS_9ExecStateEjNS_7JSValueEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore26JSSpeechSynthesisPrototype4selfERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(__ZN7WebCore15getDOMStructureINS_17JSSpeechSynthesisEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) | 0) + 8 >> 2] | 0;
 return i3 | 0;
}
function viiii___ZN3JSC8JSObject12defaultValueEPKS0_PNS_9ExecStateENS_22PreferredPrimitiveTypeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject12defaultValueEPKS0_PNS_9ExecStateENS_22PreferredPrimitiveTypeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZN3JSC8JSObject14deletePropertyEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN3JSC8JSObject14deletePropertyEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function iiii___ZN3JSC6JSCell17customHasInstanceEPNS_8JSObjectEPNS_9ExecStateENS_7JSValueE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN3JSC6JSCell17customHasInstanceEPNS_8JSObjectEPNS_9ExecStateENS_7JSValueE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN3JSC8JSObject16copyBackingStoreEPNS_6JSCellERNS_11CopyVisitorENS_9CopyTokenE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN3JSC8JSObject16copyBackingStoreEPNS_6JSCellERNS_11CopyVisitorENS_9CopyTokenE(i1 | 0, i2 | 0, i3 | 0);
}
function viiii___ZN3JSC8JSObject6toThisEPNS_6JSCellEPNS_9ExecStateENS_8ECMAModeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN3JSC8JSObject6toThisEPNS_6JSCellEPNS_9ExecStateENS_8ECMAModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZN3JSC8JSObject21deletePropertyByIndexEPNS_6JSCellEPNS_9ExecStateEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN3JSC8JSObject21deletePropertyByIndexEPNS_6JSCellEPNS_9ExecStateEj(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZN3JSC6JSCell16getConstructDataEPS0_RNS_13ConstructDataE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN3JSC6JSCell16getConstructDataEPS0_RNS_13ConstructDataE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN3JSC8JSObject13visitChildrenEPNS_6JSCellERNS_11SlotVisitorE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3JSC8JSObject13visitChildrenEPNS_6JSCellERNS_11SlotVisitorE(i1 | 0, i2 | 0);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function vii___ZN3JSC6JSCell17getTypedArrayImplEPNS_17JSArrayBufferViewE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3JSC6JSCell17getTypedArrayImplEPNS_17JSArrayBufferViewE(i1 | 0, i2 | 0);
}
function ii___ZN3JSC6JSCell22slowDownAndWasteMemoryEPNS_17JSArrayBufferViewE__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN3JSC6JSCell22slowDownAndWasteMemoryEPNS_17JSArrayBufferViewE(i1 | 0) | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function iii___ZN3JSC6JSCell11getCallDataEPS0_RNS_8CallDataE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN3JSC6JSCell11getCallDataEPS0_RNS_8CallDataE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vii___ZN3JSC8JSObject9classNameEPKS0___wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3JSC8JSObject9classNameEPKS0_(i1 | 0, i2 | 0);
}
function b4(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(4);
 return 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore22JSSpeechSynthesisOwnerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15WeakHandleOwnerD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function b10(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(10);
 return 0;
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore22JSSpeechSynthesisOwnerD1Ev(i1) {
 i1 = i1 | 0;
 __ZN3JSC15WeakHandleOwnerD2Ev(i1 | 0);
 return;
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function __ZN7WebCore17JSSpeechSynthesis14finishCreationERN3JSC2VME(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vi___ZN3JSC6JSCell7destroyEPS0___wrapper(i1) {
 i1 = i1 | 0;
 __ZN3JSC6JSCell7destroyEPS0_(i1 | 0);
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,iiii___ZN3JSC6JSCell17customHasInstanceEPNS_8JSObjectEPNS_9ExecStateENS_7JSValueE__wrapper,b0,iiii___ZN3JSC8JSObject21deletePropertyByIndexEPNS_6JSCellEPNS_9ExecStateEj__wrapper,b0,iiii___ZN3JSC8JSObject14deletePropertyEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameE__wrapper,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,viiiii___ZN3JSC8JSObject10putByIndexEPNS_6JSCellEPNS_9ExecStateEjNS_7JSValueEb__wrapper,b1,viiiii___ZN3JSC8JSObject3putEPNS_6JSCellEPNS_9ExecStateENS_12PropertyNameENS_7JSValueERNS_15PutPropertySlotE__wrapper,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,vi___ZN3JSC6JSCell7destroyEPS0___wrapper,b2,__ZN7WebCore17JSSpeechSynthesis7destroyEPN3JSC6JSCellE,b2,__ZN7WebCore17JSSpeechSynthesisD2Ev,b2,__ZN7WebCore22JSSpeechSynthesisOwnerD1Ev,b2,__ZN7WebCore22JSSpeechSynthesisOwnerD0Ev,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN3JSC6JSCell17getTypedArrayImplEPNS_17JSArrayBufferViewE__wrapper,b3,vii___ZN3JSC8JSObject13visitChildrenEPNS_6JSCellERNS_11SlotVisitorE__wrapper,b3,vii___ZN3JSC8JSObject9classNameEPKS0___wrapper,b3];
  var FUNCTION_TABLE_iiiiiii = [b4,b4,__ZN7WebCore23jsSpeechSynthesisPausedEPN3JSC9ExecStateExxNS0_12PropertyNameE,b4,__ZN7WebCore24jsSpeechSynthesisPendingEPN3JSC9ExecStateExxNS0_12PropertyNameE,b4,__ZN7WebCore25jsSpeechSynthesisSpeakingEPN3JSC9ExecStateExxNS0_12PropertyNameE,b4];
  var FUNCTION_TABLE_ii = [b5,b5,__ZN7WebCore39jsSpeechSynthesisPrototypeFunctionSpeakEPN3JSC9ExecStateE,b5,__ZN7WebCore39jsSpeechSynthesisPrototypeFunctionPauseEPN3JSC9ExecStateE,b5,__ZN7WebCore40jsSpeechSynthesisPrototypeFunctionCancelEPN3JSC9ExecStateE,b5,__ZN7WebCore40jsSpeechSynthesisPrototypeFunctionResumeEPN3JSC9ExecStateE,b5,ii___ZN3JSC6JSCell22slowDownAndWasteMemoryEPNS_17JSArrayBufferViewE__wrapper,b5,__ZN7WebCore43jsSpeechSynthesisPrototypeFunctionGetVoicesEPN3JSC9ExecStateE,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,viii___ZN3JSC8JSObject16copyBackingStoreEPNS_6JSCellERNS_11CopyVisitorENS_9CopyTokenE__wrapper,b6,__ZN7WebCore22JSSpeechSynthesisOwner8finalizeEN3JSC6HandleINS1_7UnknownEEEPv,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_iiiii = [b8,b8,__ZN7WebCore22JSSpeechSynthesisOwner26isReachableFromOpaqueRootsEN3JSC6HandleINS1_7UnknownEEEPvRNS1_11SlotVisitorE,b8,__ZN7WebCore26JSSpeechSynthesisPrototype18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE,b8,__ZN7WebCore17JSSpeechSynthesis18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE,b8,iiiii___ZN3JSC8JSObject25getOwnPropertySlotByIndexEPS0_PNS_9ExecStateEjRNS_12PropertySlotE__wrapper,b8,b8,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_iii = [b9,b9,iii___ZN3JSC6JSCell11getCallDataEPS0_RNS_8CallDataE__wrapper,b9,iii___ZN3JSC6JSCell16getConstructDataEPS0_RNS_13ConstructDataE__wrapper,b9,b9,b9];
  var FUNCTION_TABLE_iiiiii = [b10,b10,iiiiii___ZN3JSC8JSObject17defineOwnPropertyEPS0_PNS_9ExecStateENS_12PropertyNameERKNS_18PropertyDescriptorEb__wrapper,b10];
  var FUNCTION_TABLE_viiii = [b11,b11,__ZN7WebCore17JSSpeechSynthesisC2EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SpeechSynthesisEEE,b11,viiii___ZN3JSC8JSObject19getOwnPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper,b11,viiii___ZN3JSC8JSObject12defaultValueEPKS0_PNS_9ExecStateENS_22PreferredPrimitiveTypeE__wrapper,b11,viiii___ZN3JSC8JSObject16getPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper,b11,viiii___ZN3JSC8JSObject6toThisEPNS_6JSCellEPNS_9ExecStateENS_8ECMAModeE__wrapper,b11,viiii___ZN3JSC8JSObject27getOwnNonIndexPropertyNamesEPS0_PNS_9ExecStateERNS_17PropertyNameArrayENS_15EnumerationModeE__wrapper,b11,b11,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore15SpeechSynthesisE": __ZTVN7WebCore15SpeechSynthesisE, "__ZN3JSC8JSObject6s_infoE": __ZN3JSC8JSObject6s_infoE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE","__ZN7WebCore12cacheWrapperINS_15SpeechSynthesisENS_17JSSpeechSynthesisEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore17JSSpeechSynthesisC2EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_15SpeechSynthesisEEE","__ZN7WebCore39jsSpeechSynthesisPrototypeFunctionSpeakEPN3JSC9ExecStateE","__ZN7WebCore22JSSpeechSynthesisOwnerD1Ev","__ZN7WebCore17JSSpeechSynthesis7destroyEPN3JSC6JSCellE","_strlen","__ZN7WebCore17JSSpeechSynthesis14finishCreationERN3JSC2VME","__ZN7WebCore22JSSpeechSynthesisOwner26isReachableFromOpaqueRootsEN3JSC6HandleINS1_7UnknownEEEPvRNS1_11SlotVisitorE","__ZN7WebCore39jsSpeechSynthesisPrototypeFunctionPauseEPN3JSC9ExecStateE","__ZN7WebCore18getExistingWrapperINS_17JSSpeechSynthesisENS_15SpeechSynthesisEEEN3JSC7JSValueEPNS3_9ExecStateEPT0_","__ZN7WebCore17toSpeechSynthesisEN3JSC7JSValueE","_memset","__ZN7WebCore26JSSpeechSynthesisPrototype18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE","_memcpy","__ZN7WebCore7jsArrayIN3WTF6RefPtrINS_20SpeechSynthesisVoiceEEELj0EEEN3JSC7JSValueEPNS5_9ExecStateEPNS_17JSDOMGlobalObjectERKNS1_6VectorIT_XT0_ENS1_15CrashOnOverflowEEE","__ZN7WebCore23jsSpeechSynthesisPausedEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN3JSC21getStaticFunctionSlotINS_8JSObjectEEEbPNS_9ExecStateERKNS_9HashTableEPS1_NS_12PropertyNameERNS_12PropertySlotE","__ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_","__ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_15SpeechSynthesisE","__ZN7WebCore17JSSpeechSynthesis18getOwnPropertySlotEPN3JSC8JSObjectEPNS1_9ExecStateENS1_12PropertyNameERNS1_12PropertySlotE","__ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore40jsSpeechSynthesisPrototypeFunctionCancelEPN3JSC9ExecStateE","__ZN7WebCore17JSSpeechSynthesisD2Ev","__ZN7WebCore40jsSpeechSynthesisPrototypeFunctionResumeEPN3JSC9ExecStateE","__ZN3JSC18getStaticValueSlotIN7WebCore17JSSpeechSynthesisENS1_12JSDOMWrapperEEEbPNS_9ExecStateERKNS_9HashTableEPT_NS_12PropertyNameERNS_12PropertySlotE","__ZN7WebCore24jsSpeechSynthesisPendingEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore17JSSpeechSynthesis15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZN7WebCore22JSSpeechSynthesisOwnerD0Ev","__ZN7WebCore22JSSpeechSynthesisOwner8finalizeEN3JSC6HandleINS1_7UnknownEEEPv","__ZN7WebCore25jsSpeechSynthesisSpeakingEPN3JSC9ExecStateExxNS0_12PropertyNameE","__ZN7WebCore15getDOMStructureINS_17JSSpeechSynthesisEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore43jsSpeechSynthesisPrototypeFunctionGetVoicesEPN3JSC9ExecStateE","__ZN7WebCore26JSSpeechSynthesisPrototype4selfERN3JSC2VMEPNS1_14JSGlobalObjectE"]
