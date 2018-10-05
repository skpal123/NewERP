using ERPWebApiService.Authentication;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using ViewModel.Model;

namespace ERPWebApiService.Autentication
{
    public abstract class AuthorizationHelper
    {
        public static UserSession GetSession()
        {
            var requestObj = HttpContext.Current.Request.Headers.GetValues("sessionId");
            var sessionId = HttpContext.Current.Request.Headers != null ? HttpContext.Current.Request.Headers.Get("sessionid") : null;
            if (sessionId == null)
            {
                sessionId = HttpContext.Current.Request.Headers.Get("sessionId");
            }
            try
            {
                var userSession = SecurityServices.LookupSession(sessionId);
                if (!IsSessionExist(sessionId)) throw  new Exceptions.InvalidSessionFailure();

                var UserId = Convert.ToString(HttpContext.Current.Request.Headers["UserId"]);
                var action = Convert.ToString(HttpContext.Current.Request.Headers["ActionName"]);
                var AgentId = Convert.ToString(HttpContext.Current.Request.Headers["AgentId"]);
                //if (!string.IsNullOrEmpty(pluginName))
                //{
                //    List<PermissionInfo> permissions = GetActionPermissions(UserId, pluginName, action);
                //    if (permissions.Count() > 0)
                //        return userSession;
                //    else
                //        throw GenerateServiceError("You are not authorized to do this Action.", HttpStatusCode.Forbidden, new LogMessage(EnumLogLevel.Warn, new Exception()));
                //}
                //else
                return userSession;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        //public static List<PermissionView> GetActionPermissions(string userId, string pluginName, string actionName)
        //{
        //    List<PermissionView> permissions = new List<PermissionView>();
        //    //var logMessage = new LogMessage(EnumLogLevel.Info);
        //    //serviceLogger.Log(EnumLogLevel.Debug, "Call Get Action Permission list .");

        //    try
        //    {
        //        var userPermissions = iMFASDataServices.UserPermissions.Count(up => up.UserId == Guid.Parse(userId));
        //        if (userPermissions > 0)
        //        {
        //            permissions = (from userPermission in iMFASDataServices.UserPermissions
        //                           join permission in iMFASDataServices.Permissions on userPermission.PermissionId equals permission.Id
        //                           join userinfo in iMFASDataServices.Users
        //                           on new { uId = userPermission.UserId, roleId = userPermission.RoleId } equals new { uId = userinfo.Id, roleId = userinfo.UserRole.Id }
        //                           join item in iMFASDataServices.Items on permission.ItemId equals item.Id
        //                           join subMenu in iMFASDataServices.SubMenus on item.SubMenuId equals subMenu.Id
        //                           where userinfo.Id == Guid.Parse(userId)
        //                               && subMenu.PluginName == pluginName
        //                               && permission.ActionName == actionName
        //                           select new PermissionInfo()
        //                           {
        //                               Id = permission.Id,
        //                               PermissionName = permission.PermissionName,
        //                               ItemId = item.Id,
        //                               ItemName = item.ItemName,
        //                               SubMenuId = subMenu.Id,
        //                               SubMenuName = subMenu.SubMenuName
        //                           }).ToList();

        //        }
        //        else
        //        {
        //            permissions = (from mod in iMFASDataServices.Modules
        //                           join menu in iMFASDataServices.Menus on mod.Id equals menu.ModuleId
        //                           join subMenu in iMFASDataServices.SubMenus on menu.Id equals subMenu.MenuId
        //                           join item in iMFASDataServices.Items on subMenu.Id equals item.SubMenuId
        //                           join permission in iMFASDataServices.Permissions on item.Id equals permission.ItemId
        //                           join rolepermission in iMFASDataServices.RolePermissions on permission.Id equals rolepermission.PermissionId
        //                           join userinfo in iMFASDataServices.Users on rolepermission.RoleId equals userinfo.UserRole.Id
        //                           where userinfo.Id == Guid.Parse(userId)
        //                           && subMenu.PluginName == pluginName
        //                           && permission.ActionName == actionName
        //                           select new PermissionInfo()
        //                           {
        //                               Id = permission.Id,
        //                               PermissionName = permission.PermissionName,
        //                               ItemId = item.Id,
        //                               ItemName = item.ItemName,
        //                               SubMenuId = subMenu.Id,
        //                               SubMenuName = subMenu.SubMenuName,
        //                               MenuId = menu.Id,
        //                               MenuName = menu.MenuName,
        //                               ModuleId = mod.Id,
        //                               ModuleName = mod.ModuleName
        //                           }).ToList();
        //        }
        //        serviceLogger.Log(EnumLogLevel.Debug, "Complete Get Action Permission function.");
        //    }
        //    catch (Exception ex)
        //    {
        //        throw AuthorizationHelper.GenerateServiceError(ex.Message, HttpStatusCode.InternalServerError, logMessage.Clone(EnumLogLevel.Warn));
        //    }

        //    return permissions;
        //    return new UserSession();
        //}
        protected static bool IsSessionExist(string sessionId)
        {
            var sessionExist = false;
            Guid? loggedsession_id = null;

            using (SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["SumonERPContext"].ConnectionString.ToString()))
            {
                var sql = "select session_id from SessionManagements where session_Id='" + sessionId + "'";
                con.Open();
                IDataReader oReader = new SqlCommand(sql, con).ExecuteReader();
                if (((System.Data.SqlClient.SqlDataReader)(oReader)).HasRows)
                {
                    while (oReader.Read())
                    {
                        loggedsession_id = Guid.Parse(Convert.ToString(oReader["session_id"]));
                        if (loggedsession_id != null)
                        {
                            sessionExist = true;
                        }
                    }
                }
                oReader.Close();
                return sessionExist;
            }

        }
    }
}