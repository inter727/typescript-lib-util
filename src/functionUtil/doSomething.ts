abstract class Data {
  name: string = ''
  age: number = 0
  sex: string = ''
  skill: string[] = []
}

class CreateData extends Data {
  kind: 'create' = 'create'
}

class EditData extends Data {
  kind: 'edit' = 'edit'
  id: string = ''
}

function doSomething(args: CreateData | EditData) {
  if (args.kind === 'edit') {
    args.id
  } else {
    args.name
  }
}



