// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as TodosAPI from './todos';

export class Todos extends APIResource {
  create(body: TodoCreateParams, options?: Core.RequestOptions): Core.APIPromise<TodoCreateResponse> {
    return this._client.post('/todos', { body, ...options });
  }

  retrieve(options?: Core.RequestOptions): Core.APIPromise<TodoRetrieveResponse> {
    return this._client.get('/todos/:id', options);
  }

  update(body?: TodoUpdateParams, options?: Core.RequestOptions): Core.APIPromise<TodoUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<TodoUpdateResponse>;
  update(
    body: TodoUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TodoUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.put('/todos/:id', { body, ...options });
  }

  list(options?: Core.RequestOptions): Core.APIPromise<TodoListResponse> {
    return this._client.get('/todos', options);
  }

  delete(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete('/todos/:id', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  progress(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/todos/:id/progress', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  upload(body?: TodoUploadParams, options?: Core.RequestOptions): Core.APIPromise<TodoUploadResponse>;
  upload(options?: Core.RequestOptions): Core.APIPromise<TodoUploadResponse>;
  upload(
    body: TodoUploadParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TodoUploadResponse> {
    if (isRequestOptions(body)) {
      return this.upload({}, body);
    }
    return this._client.post('/todos/:id/upload', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export interface TodoCreateResponse {
  id: string;

  completed: boolean;

  title: string;

  description?: string;

  fileUrl?: string;
}

export interface TodoRetrieveResponse {
  id: string;

  completed: boolean;

  title: string;

  description?: string;

  fileUrl?: string;
}

export interface TodoUpdateResponse {
  id: string;

  completed: boolean;

  title: string;

  description?: string;

  fileUrl?: string;
}

export type TodoListResponse = Array<TodoListResponse.TodoListResponseItem>;

export namespace TodoListResponse {
  export interface TodoListResponseItem {
    id: string;

    completed: boolean;

    title: string;

    description?: string;

    fileUrl?: string;
  }
}

export interface TodoUploadResponse {
  id: string;

  completed: boolean;

  title: string;

  description?: string;

  fileUrl?: string;
}

export interface TodoCreateParams {
  completed: boolean;

  title: string;

  description?: string;
}

export interface TodoUpdateParams {
  completed?: boolean;

  description?: string;

  title?: string;
}

export interface TodoUploadParams {
  file?: unknown | null;
}

export namespace Todos {
  export import TodoCreateResponse = TodosAPI.TodoCreateResponse;
  export import TodoRetrieveResponse = TodosAPI.TodoRetrieveResponse;
  export import TodoUpdateResponse = TodosAPI.TodoUpdateResponse;
  export import TodoListResponse = TodosAPI.TodoListResponse;
  export import TodoUploadResponse = TodosAPI.TodoUploadResponse;
  export import TodoCreateParams = TodosAPI.TodoCreateParams;
  export import TodoUpdateParams = TodosAPI.TodoUpdateParams;
  export import TodoUploadParams = TodosAPI.TodoUploadParams;
}
