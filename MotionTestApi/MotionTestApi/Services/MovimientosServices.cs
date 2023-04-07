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
    public class MovimientosServices: ControllerBase
    {
        private readonly MovimientosRepository _movimientosRepository;

        public MovimientosServices(MovimientosRepository movimientosRepository)
        {
            _movimientosRepository = movimientosRepository;
        }

        public async Task GuardarMovimiento(Movimientos movimiento)
        {
            try
            {
                await _movimientosRepository.GuardarMovimiento(movimiento);
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }

        public async Task<IActionResult> ActualizarMovimiento(Movimientos movimiento)
        {
            try
            {
                movimiento.Fecha = DateTime.Now;
                await _movimientosRepository.ActualizarMovimiento(movimiento);

                return Ok(new { mensaje = "Movimiento actualizado con exito" });
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }


        public List<int> GetMovimientosByModoId(int modoId)
        {
            try
            {
                return _movimientosRepository.GetMovimientosByModoId(modoId);
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }
        }


    }
}
