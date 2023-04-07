using Microsoft.AspNetCore.Mvc;
using MotionTestApi.Models;
using MotionTestApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MotionTestApi.Services
{
    public class PuntosServices: ControllerBase
    {
        private readonly PuntosRepository _puntosRepository;

        public PuntosServices(PuntosRepository puntosRepository)
        {
            _puntosRepository = puntosRepository;
        }

        public async Task GuardarPuntos(Puntos puntos)
        {
            try
            {
                await _puntosRepository.GuardarPuntos(puntos);
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }

        public async Task<IActionResult> ActualizarPunto(Puntos punto)
        {
            try
            {
                punto.Fecha = DateTime.Now;
                await _puntosRepository.ActualizarPunto(punto);

                return Ok(new { mensaje = "Punto actualizado con exito" });
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }


        public List<Puntos> GetPuntosByIds(int[] puntos)
        {
            try
            {
                return _puntosRepository.GetPuntosByIds(puntos);
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }


    }
}
