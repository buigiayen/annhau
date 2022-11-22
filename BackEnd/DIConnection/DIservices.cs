using BackEnd.Data.Command;
using BackEnd.interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.DIConnection
{
    public static class DIservices
    {
        public static IServiceCollection ConfigDI(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IThanhVien, ThanhVienCommand>();
            serviceCollection.AddSingleton<INoiQui, NoiQuiCommand>();
            return serviceCollection;
        }
    }
}
