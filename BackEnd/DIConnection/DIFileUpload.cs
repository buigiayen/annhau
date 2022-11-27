using BackEnd.Data.Command;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.DIConnection
{
    public static class DIFileUpload
    {
        public static IServiceCollection FileRootConnection(this IServiceCollection services, IConfiguration configuration)
        {
            FileCommand.FileRoot += configuration["RootFile"]?.Trim();
            if (!System.IO.Directory.Exists(FileCommand.FileRoot)) {
                System.IO.Directory.CreateDirectory(FileCommand.FileRoot);
            }
            return services;
        }
    }
}
