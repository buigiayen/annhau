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
            serviceCollection.AddTransient<ILichAnNhau, LichAnNhauCommand>();
            serviceCollection.AddSingleton<INoiQui, NoiQuiCommand>();
            serviceCollection.AddSingleton<IChucVu, ChucVuCommand>();
            return serviceCollection;
        }
    }
}
