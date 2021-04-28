const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

// 宣告任務
function defaulTask(cb){
    console.log('gulp 安裝成功');
    cb();
} 

//執行任務
exports.do = defaulTask;

function move() {
    return src('dev/*.html').pipe(dest('dist'));
} 

//執行任務
exports.mv = move;

//宣告A任務
function A(cb){
    console.log('A');
    cb();
};

//宣告Ｂ任務
function B(cb){
    console.log('B');
    cb();
};

exports.m1 = parallel(A,B); //同時執行任務
//exports.m1 = parallel(A,B,C); //同時執行任務

exports.m2 = series(A,B); //依序執行任務

exports.watchfile = function(){
    watch('dev/*.html',move);
}
