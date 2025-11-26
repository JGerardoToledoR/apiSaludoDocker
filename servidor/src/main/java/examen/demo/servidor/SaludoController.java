package examen.demo.servidor;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5174",
        allowedHeaders = "*",
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
public class SaludoController {

    @PostMapping("/sumar")
    public int sumar(@RequestBody Map<String, Integer> body) {
        return body.get("numero1") + body.get("numero2");
    }

}
