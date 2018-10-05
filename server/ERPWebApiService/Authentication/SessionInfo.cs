using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ViewModel.Model;

namespace ERPWebApiService.Autentication
{
    public class SessionInfo
    {
        public string SessionId { get; set; }

        /// <summary>
        /// Information about the logged on user, including first name, last name and other descriptive fields.
        /// </summary>
        public UserInfoView UserInfo { get; set; }

        /// <summary>
        /// Information about session time
        /// </summary>
        public double SessionTime { get; set; }

        /// <summary>
        /// Information about User Level (Branch User/ Area User/ Zone User)
        /// </summary>
        public int UserLevel { get; set; }

        /// <summary>
        /// Information about LevelId (Branch Id/ Area Id/ Zone Id)
        /// </summary>
        public Guid? LevelId { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string PluginName { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public string OrgHierarchy { get; set; }
    }
}