import resty, { Controller, Get, Context } from "@restyjs/core";

@Controller("/hello")
class HelloController {

  @Get("/")
  index() {
    return "Hello World";
  }
}

const app = resty({
  controllers: [HelloController],
});

app.listen(8080);