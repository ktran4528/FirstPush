export let flag = false;
export function touch() 
{flag = true;
}

import { flag, touch } 
from 'validator';
console.log(flag);
touch();
console.log(flag);