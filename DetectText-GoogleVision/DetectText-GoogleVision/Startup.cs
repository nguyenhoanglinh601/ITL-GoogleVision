
using DetectText_GoogleVision.DL.IService;
using DetectText_GoogleVision.DL.Services;
using DetectText_GoogleVision.Service.Models.ModelForGoogleAPI;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using IHostingEnvironment = Microsoft.AspNetCore.Hosting.IHostingEnvironment;

namespace DetectText_GoogleVision
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //// requires using Microsoft.Extensions.Options
            services.AddMvc().AddSessionStateTempDataProvider();
            services.AddSession();

            services.AddTransient<IGoogleVisionService, GoogleVisionService>();
            services.AddTransient<IGetValueService, GetValueService>();
            services.AddTransient<ICategoryObjectService<ResponseGoogleVision.TextAnnotation>, CategoryObjectService>();



        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(options => options.WithOrigins("http://localhost:4200/")
               .AllowAnyMethod()
               .AllowAnyOrigin()
               .AllowAnyHeader());

            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseSession();
            app.UseMvcWithDefaultRoute();

            //app.UseRouting();

            //app.UseAuthorization();

            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapControllers();
            //});
        }
    }
}
