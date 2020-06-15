import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMember'
})
export class FilterMemberPipe implements PipeTransform {

  transform(value: any, arg: any): any {
   if(arg === '' || arg.length < 3) return value;
   const resultPost = [];
   for( const post of value ){
     if(post.name.toLowerCase().indexOf(arg.toLowerCase())> -1 ){
        resultPost.push(post);
     };
   };

    return resultPost;
  }

}
