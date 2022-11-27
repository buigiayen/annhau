using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.DIConnection
{
    public static class DIMinio
    {
        public static IServiceCollection ConnecMinio(this IServiceCollection serviceCollection, IConfiguration configuration)
        {
            try
            {
                string endpoint = configuration["MiniIOConfig:EndPoint"].ToString(); 
                string Port = configuration["MiniIOConfig:Port"].ToString();
                string accessKey = configuration["MiniIOConfig:accessKey"].ToString();
                string secretKey = configuration["MiniIOConfig:secretKey"].ToString();

                infrastructure.MinioUpload.ConnectionString = endpoint + "|" + accessKey + "|" + secretKey + "|" + Port;
            }
            catch (Exception ex)
            {

                throw;
            }
            
            return serviceCollection;
        }
    }
}
