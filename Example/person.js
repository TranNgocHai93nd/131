
    

/** 
 Use one of two ways to export a file,see flowwing:
  1.export from named export :
    + systag:+ All once export;// dành cho trường hợp nhóm lại
            + In-line individually( riêng lẻ từng dòng)
    + import  {names} from 'link module js'
  2.Export from default export
    + expor default: chỉ có 1 default trong module
    + import name from 'link module js'


*/ 



function logger (log, type = type_Log){
    console[type](log);
};
export default logger;

