import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import { DefaultRouteService } from './default-route.service';
@Injectable({
  providedIn: 'root'
})
export class PostLoginService {

  constructor(private _http:Http,private _defaultRoute:DefaultRouteService) { }
  getModules(){
    var url=this._defaultRoute.administrationService+'getModules/';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('ActionName', 'get');
    const options = new RequestOptions({ headers: headers });
    return this._http.get(url,options)
  }
  getMenus(ModuleSeqId:string){
    var url=this._defaultRoute.administrationService+'getMenusByModule/'+ModuleSeqId;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('ActionName', 'get');
    const options = new RequestOptions({ headers: headers });
    return this._http.get(url,options)
  }
  geSubMenus(MenuSeqId:string){
    var url=this._defaultRoute.administrationService+'getSubMenusByMenuId/'+MenuSeqId;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('ActionName', 'get');
    const options = new RequestOptions({ headers: headers });
    return this._http.get(url,options)
  }
}
