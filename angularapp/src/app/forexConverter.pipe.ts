import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:"forexConverter"
})
export class forexConverter implements PipeTransform{
    transform(value: any, ...args: any[]) {
        throw new Error("Method not implemented.");
    }
    
}