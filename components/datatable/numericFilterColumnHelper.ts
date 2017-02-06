import { Injectable } from '@angular/core';
import {Column, HeaderColumnGroup} from '../common/shared';

@Injectable()
export class NumericFilterColumnHelper{

    public static MAX_INT_VALUE = 2147483647;

    isNumericFilterNotValid(filterValue: any, column: Column){
        if(column.filterNumeric && filterValue != "")
        {
            if(isNaN(Number(filterValue))){
                return true;
            }

            if(!column.filterAllowDecimals){
                let valueParts = (filterValue + "").split(".");
                if(valueParts[1] && valueParts[1] != ""){
                    return true;
                }
            }

            if((column.filterNumericMaxValue != undefined ? filterValue > column.filterNumericMaxValue : false ) || filterValue > NumericFilterColumnHelper.MAX_INT_VALUE){
                return true;
            }

            if((column.filterNumericMinValue != undefined ? filterValue < column.filterNumericMinValue : false) || filterValue < 0){ 
                return true;
            }
        }
        return false;
    }

    changeColumnSortSetting(columnsDictionary, sortInitialSettings, globalSortingEnabled: boolean) {
        for(let prop in columnsDictionary) {
            columnsDictionary[prop].sortable = globalSortingEnabled && sortInitialSettings[prop];
        }   
    }

    changeHeaderColumnGroupSortSetting(headerColumnGroup: HeaderColumnGroup, sortInitialSettings, globalSortingEnabled: boolean) {
        headerColumnGroup.rows.forEach(row => {
            row.columns.forEach(column => {
                column.sortable = globalSortingEnabled && sortInitialSettings[column.field];
            });
        });
    }

    SetFilterInputInHeaderColumnGroup(headerColumnGroup: HeaderColumnGroup, prop: string, filterInputNotValid: boolean){
        headerColumnGroup.rows.forEach(row => {
            let columnFound = row.columns.filter(column => column.field == prop)[0];
            if(columnFound){
                columnFound.isFilterInputNotValid = filterInputNotValid;
            }
        });
    }
}