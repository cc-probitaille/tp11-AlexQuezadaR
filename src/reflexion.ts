export function createClassEnv(): any {
    const className = process.env.CLASS_NAME;

    if(!className){
        throw new Error("The environment variable CLASS_NAME is missing");
    }

    if(className === "Animal"){
        return class{
            private var1:string;
            private var2:number;

            constructor(var1: string, var2: number){
                this.var1=var1;
                this.var2=var2;
            }

            getClassName(){
                return className;
            }

            getVar1(){
                return this.var1;
            }

            getVar2(){
                return this.var2;
            }

            getFunctionString(){
                return `${this.var1}..${this.var2}`;
            }

        };
    }

    throw new Error(`The class '${className}' cant be found`);
}