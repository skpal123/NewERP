using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ERP.DataService.Model;
using ViewModel.Model;
using ERPWebApiService.Authentication;
namespace ERPWebApiService.Controllers
{
     [RoutePrefix("api/AdministrationService")]
    public class AdministrationController : ApiController
    {
         SumonERPContext ERPContext = new SumonERPContext();
         [Route("getModules")]
         [HttpGet]
         public HttpResponseMessage getModules()
         {
             try
             {
                 var module = ERPContext.Modules.Select(x => new ModuleView
                 {
                     Id = x.Id,
                     Name = x.Name,
                     RouterPath = x.RouterPath
                 }).ToList();
                 return Request.CreateResponse(HttpStatusCode.OK, module);
             }
             catch(Exception ex){
                 return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
             }
            
         }
         [Route("hash")]
         [HttpGet]
         public HttpResponseMessage createHash()
         {
             var h = PasswordHash.Create("001");
             return Request.CreateResponse(HttpStatusCode.OK, h);

         }
         [Route("getMenusByModule/{moduleId}")]
         [HttpGet]
         public HttpResponseMessage getMenusByModuleId(string moduleId)
         {
             try
             {
                 var module = ERPContext.Menus.Select(x => new MenuView
                 {
                     Id = x.Id,
                     Name = x.Name,
                     RouterPath = x.RouterPath
                 }).ToList();
                 return Request.CreateResponse(HttpStatusCode.OK, module);
             }
             catch (Exception ex)
             {
                 return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
             }

         }
    }
}
