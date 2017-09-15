var o = {};
var bValue = 38;
Object.defineProperty(o, 'b', {
  get: function() { 
    console.log('get property on o');
    return bValue 
  },
  set: function( newVal ) { return bValue = newVal },
  // value: 100
})
console.log(o)
console.log(o.b)

o.b = 12;

console.log('o.b 2: ', o.b);

<el-button type="primary">{{$t('download')}}
                <a type="primary" :href="'http://'+ip+':3080/system/tool/backup/download'">{{$t('download')}}</a>
              </el-button>