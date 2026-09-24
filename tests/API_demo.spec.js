import { test, expect } from '@playwright/test'
import { request } from 'node:http'

test('API GET request', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users/2')

    expect(response.status()).toBe(200)

    const text = await response.text()
    expect(text).toContain('Janet')

    console.log(await response.json)


})



test('API POST request', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {

        data:
        {
            "name": "swam",
            "job": "QA engineer"
        }
    })

    expect(response.status()).toBe(201)

    const text = await response.text()
    expect(text).toContain('swam')

    console.log(await response.json)


})



test('API PUT request', async ({ request }) => {

    const response = await request.put('https://reqres.in/api/users/2', {

        data:
        {
            "name": "swams",
            "job": "QA engineer"
        }
    })

    expect(response.status()).toBe(200)

    const text = await response.text()
    expect(text).toContain('swams')

    console.log(await response.json)


})

test('API DELETE request', async ({ request }) => {

    const response = await request.delete('https://reqres.in/api/users/2')
    expect(response.status()).toBe(204)

    
})