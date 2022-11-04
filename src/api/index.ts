class UserDto {
static BankDetails?: BankDetailsDto[];
static FirstName: string;
static LastName: string;
static Email: string;
static Address: string;
static Phone?: string;
static Website?: string;
static TaxRate?: number;
static NINumber?: string;
static Businesses?: BusinessDto[];
    constructor(
        public FirstName : string = '', 
        public LastName : string = '', 
        public Email : string = '',
        public Address : string = '',
        public BankDetails: BankDetailsDto[] = [{BankName: '', AccountName:'', AccountNumber: 1, SortCode: '', OtherInfo: ''}],
        public Phone?: string,
        public Website?: string,
        public TaxRate?: number,
        public NINumber?: string,
        public Businesses?: BusinessDto[],
        ) {}
}

class BankDetailsDto {
static BankName: string;
static AccountName: string;
static AccountNumber: number;
static SortCode: string;
static OtherInfo?: any;
    constructor(
        public BankName : string,
        public AccountName: string,
        public AccountNumber: number,
        public SortCode : string,  
        public OtherInfo? : string,
    ){}
}

class BusinessDto {
    constructor(
        public BusinessName: string = '',
        public Clients: ClientDto[] = [{ClientName: '', ClientAddress:'', ClientPhone: '', ClientEmail: '', ClientContact: ''}]
    ){}   
}

class ClientDto {
    static ClientName: string;
    static ClientAddress?: string;
    static ClientPhone: string;
    static ClientEmail? : string;
    static ClientContact? : string;

    constructor(
        public ClientName = '',
        public ClientAddress = '',
        public ClientPhone = '',
        public ClientEmail = '',
        public ClientContact = ''
    ){}
}

export {
    UserDto,
    BankDetailsDto,
    BusinessDto,
    ClientDto
}