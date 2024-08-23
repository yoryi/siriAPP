import Foundation
import ExpoModulesCore
import Intents

// Define el módulo de Expo
public class SiriModule: Module {
    public func definition() -> ModuleDefinition {
        Name("Siri")

        // Define un evento que será enviado a JavaScript
        Events("onSiriButtonPressed")

        // Función de prueba
        Function("hello") {
            return "Hello world! 👋"
        }

        // Función para empezar a escuchar los eventos de Siri
        Function("startListeningForSiriEvent") {
            NotificationCenter.default.addObserver(self, selector: #selector(self.siriButtonPressed), name: NSNotification.Name("SiriButtonPressed"), object: nil)
        }
    }

    @objc
    func siriButtonPressed() {
        // Envía el evento a JavaScript cuando Siri activa el Intent
        self.sendEvent("onSiriButtonPressed", [
            "message": "Siri button pressed!"
        ])
    }
}
