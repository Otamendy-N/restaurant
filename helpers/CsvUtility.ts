export interface parsedCsvFormatted {
  headers: any
  body: any
}

export class CsvUtilities {
  static formatParsedCsv (parsedCsv: string[][]): parsedCsvFormatted {
    const headers = ['Fila', ...parsedCsv[0]]
    const data = parsedCsv.slice(1)

    const result = data.map((row, rowIndex) => {
      const objectRow = {} as any
      headers.forEach((header: string, index) => {
        if (header === 'Fila') {
          objectRow[header] = rowIndex + 1
          return
        }

        // Se resta menos uno, ya que que en el row no existe el campo 'Fila'
        objectRow[header] = row[index - 1]
      })

      return objectRow
    })

    const formattedHeaders = headers.map(header => ({
      text: header,
      value: header
    }))

    formattedHeaders.push({ text: 'Acciones', value: 'acciones' })

    return {
      headers: formattedHeaders,
      body: result
    }
  }
}
