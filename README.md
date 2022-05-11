# Web APP para Movimentações Bancárias

### Web APP Angular



Está é a minha contribuição para a segunda etapa do projeto da **Santander Dev Week** em parceria com a [DIO._](https://github.com/digitalinnovationone) pelo professor [Gleyson Sampaio](https://github.com/glysns)


![image](https://user-images.githubusercontent.com/39228691/167764474-52719a2f-0572-417d-8933-2027480ed481.png)

![image](https://user-images.githubusercontent.com/39228691/167765246-7cbee45e-68b4-4e86-8d9d-056c66254379.png)


Utilizei o **ngx mask** para apresentar os dados de CPF formatados, dessa forma também são armazenados apenas os números no banco de dados. Utilizei alguns _**components**_ do Bootstrap para deixar a usabilidade um pouco mais dinâmica, como o uso de 'modal' no botão de gravação de novo correntista, assim o usuário é avisado de que deve atualizar a página para visualizar o novo cadastro.

![image](https://user-images.githubusercontent.com/39228691/167765397-71a5d866-88fa-4b54-ba2b-7ce180c06992.png)
![image](https://user-images.githubusercontent.com/39228691/167765543-ebc20bc2-4e17-4b6d-ab83-041d00711f83.png)
![image](https://user-images.githubusercontent.com/39228691/167765600-835226da-f90b-4cf0-9632-efa883fd97a3.png)


_**Obs.:** O intuito não foi tentar replicar as páginas de serviços do Santander._



Para ver como instalar e utilizar o [Ngx Mask](https://github.com/JsDaddy/ngx-mask) acesse o repositório do projeto aqui no github.

Exemplo de uso como mascara de CPF:

```
<input  class="form-control" id="iCpf" [(ngModel)]="cpf" placeholder="CPF" mask="000.000.000-00">

<span>{{ cpf | mask: '000.000.000-00' }}</span>
```
[Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.[^1]




[^1]: To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
