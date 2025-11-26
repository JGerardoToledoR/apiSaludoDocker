package examen.demo.servidor;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5174",
        allowedHeaders = "*",
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
public class SaludoController {

    @PostMapping("/saludo")
    public String saludar(@RequestBody Map<String, String> body){
        String nombres = body.get("nombres");
        String apellidos = body.get("apellidos");
        return "Hola " + nombres + " " + apellidos;
    }

}
