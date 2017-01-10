import { Injectable } from '@angular/core';
import {Column,Header,Footer,HeaderColumnGroup,FooterColumnGroup} from '../common/shared';

@Injectable()
export class FilterColumnValidatorHelper{

    validateNumericFilter(filterValue: any, column: Column){
        if(column.filterNumeric && filterValue != "")
        {
            let reg = new RegExp('');
            if(column.filterAllowDecimals){
                reg = new RegExp('/(\d+(\.\d+)?)/');
            }
            else{
                reg = new RegExp('^[0-9]+$');
            }

            if(!reg.test(filterValue)){
                return true;
            } 

            let maxIntValue = 2147483647;
            filterValue = +filterValue;

            if((column.filterNumericMaxValue != undefined ? filterValue > column.filterNumericMaxValue : false ) || filterValue > maxIntValue){
                return true;
            }

            if((column.filterNumericMinValue != undefined ? filterValue < column.filterNumericMinValue : false) || filterValue < -maxIntValue){ 
                return true;
            }
        }
        return false;
    }

    changeColumnSortSetting(columnsDictionary: {[s: string]: Column;}, sortInitialSettings: {[s: string]: boolean;}, globalSortingEnabled: boolean) {
        for(let prop in columnsDictionary) {
            columnsDictionary[prop].sortable = globalSortingEnabled && sortInitialSettings[prop];
        }   
    }
}