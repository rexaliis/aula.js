﻿import { ThrowHelper } from "../../../Common/ThrowHelper";

export class MessageDeletedEventData
{
	readonly #_id: string;

	public constructor(data: any)
	{
		ThrowHelper.TypeError.throwIfNullable(data);
		ThrowHelper.TypeError.throwIfNotType(data.id, "string");

		this.#_id = data.id;
	}

	public get id()
	{
		return this.#_id;
	}
}
