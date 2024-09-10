// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TodoHonoSDK from 'todo-hono-sdk';
import { Response } from 'node-fetch';

const client = new TodoHonoSDK({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource todos', () => {
  test('create: only required params', async () => {
    const responsePromise = client.todos.create({ completed: true, title: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.todos.create({ completed: true, title: 'x', description: 'description' });
  });

  test('retrieve', async () => {
    const responsePromise = client.todos.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.retrieve({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });

  test('update', async () => {
    const responsePromise = client.todos.update();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.update({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.todos.update(
        { completed: true, description: 'description', title: 'x' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TodoHonoSDK.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.todos.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.todos.delete();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.delete({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });

  test('progress', async () => {
    const responsePromise = client.todos.progress();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('progress: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.progress({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });

  test('upload', async () => {
    const responsePromise = client.todos.upload();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upload: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.upload({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });

  test('upload: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.todos.upload({ file: {} }, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      TodoHonoSDK.NotFoundError,
    );
  });
});
