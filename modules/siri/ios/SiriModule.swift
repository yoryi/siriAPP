import ExpoModulesCore

public class SiriModule: Module {
  public func definition() -> ModuleDefinition {
    Name("Siri")

    Function("hello") {
      return "Hello world! 👋"
    }
  }
}
