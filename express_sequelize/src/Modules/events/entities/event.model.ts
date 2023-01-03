/**
 * Account model
 * @param {*} sequelize
 * @param {*} DataTypes
 * @returns {void}
 */
export default function (sequelize: { define: (arg0: string, arg1: { id: { type: any; defaultValue: any; primaryKey: boolean; unique: { args: boolean; msg: string; }; validate: { isUUID: { args: number; msg: string; }; }; }; accountName: { type: any; }; verifiedAccountName: { type: any; }; bankCode: { type: any; }; accountNumber: { type: any; }; bank: { type: any; }; bvn: { type: any; }; bvnFirstName: any; bvnLastName: any; bvnDateOfBirth: any; bvnPhoneNumber: any; bvnIdentificationProvider: any; wrongAccountCount: any; wrongBVNCount: any; isAccountVerified: { type: any; defaultValue: boolean; }; isBVNVerified: { type: any; defaultValue: boolean; }; bankStatementCheck: { type: any; defaultValue: boolean; }; bankStatementCheckDate: { type: any; }; }, arg2: { paranoid: boolean; }) => any; }, DataTypes: { UUID: any; UUIDV4: any; STRING: any; INTEGER: any; BOOLEAN: any; DATE: any; }) {
    const Event = sequelize.define('Event', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: {
          args: true,
          msg: 'id already exists'
        },
        validate: {
          isUUID: {
            args: 4,
            msg: 'id must be uuid'
          }
        }
      },
      name: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING
      });

  
    return Event;
  }
  