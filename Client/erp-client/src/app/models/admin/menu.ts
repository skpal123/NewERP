import { Submenu } from "./submenu";

export class Menu {
   public Id?:string;
   public Name:string;
   public RouterPath:string;
   public ImagePath:string;  
   public MenuSqenceId?:number;
   public ModuleSeqId?:number;
   public SubMenus:Submenu[]
}
