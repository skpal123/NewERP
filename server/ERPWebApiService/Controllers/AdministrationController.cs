﻿using System;
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
                var modules = ERPContext.Modules.Select(x => new ModuleView
                {
                    Id = x.Id,
                    Name = x.Name,
                    RouterPath = x.RouterPath,
                    SequenceId = x.SequencesId
                }).OrderBy(x => x.Name).ToList();
                return Request.CreateResponse(HttpStatusCode.OK, modules);
            }
            catch (Exception ex)
            {
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
                var ModuleId = Convert.ToInt32(moduleId);
                var menus = ERPContext.Menus.Where(m => m.ModuleSeqId == ModuleId).Select(x => new MenuView
                {
                    Id = x.Id,
                    Name = x.Name,
                    RouterPath = x.RouterPath,
                    MenuSqenceId = x.MenuSqenceId,
                    ModuleSeqId = x.ModuleSeqId,
                    ImagePath = x.ImagePath
                }).ToList();
                return Request.CreateResponse(HttpStatusCode.OK, menus);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }

        }
        [Route("getSubMenusByMenuId/{MenuSeqId}")]
        [HttpGet]
        public HttpResponseMessage getSubMenusByMenuSeqId(string MenuSeqId)
        {
            try
            {
                var menuid = Convert.ToInt32(MenuSeqId);
                var submenus = ERPContext.SubMenus.Where(m => m.MenuSqId == menuid).Select(x => new SubMenuView
                {
                    Id = x.Id,
                    Name = x.Name,
                    RouterPath = x.RouterPath,
                    SubMenuSqId = x.SubMenuSqId,
                    MenuSqId = x.MenuSqId,
                }).ToList();
                return Request.CreateResponse(HttpStatusCode.OK, submenus);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
            }

        }
        //[Route("getSubMenusByMenuId/{MenuSeqId}")]
        //[HttpGet]
        //public HttpResponseMessage getUsers()
        //{
        //    try
        //    {
        //        var menuid = Convert.ToInt32(MenuSeqId);
        //        var submenus = ERPContext.SubMenus.Where(m => m.MenuSqId == menuid).Select(x => new SubMenuView
        //        {
        //            Id = x.Id,
        //            Name = x.Name,
        //            RouterPath = x.RouterPath,
        //            SubMenuSqId = x.SubMenuSqId,
        //            MenuSqId = x.MenuSqId,
        //        }).ToList();
        //        return Request.CreateResponse(HttpStatusCode.OK, submenus);
        //    }
        //    catch (Exception ex)
        //    {
        //        return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex.Message);
        //    }

        //}
    }
}
